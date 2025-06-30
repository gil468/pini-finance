
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

// Validate required fields
$required_fields = ['full_name', 'phone_number', 'email', 'description'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

// Sanitize input
$full_name = htmlspecialchars(trim($input['full_name']));
$phone_number = htmlspecialchars(trim($input['phone_number']));
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$description = htmlspecialchars(trim($input['description']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

try {
    // Database connection
    $host = 'localhost';
    $dbname = 'u415350299_leads';
    $username = 'u415350299_admin';
    $password = 'h:JJj$754m';
    
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Insert into database
    $stmt = $pdo->prepare("INSERT INTO leads (full_name, phone_number, email, description, created_at) VALUES (?, ?, ?, ?, NOW())");
    $stmt->execute([$full_name, $phone_number, $email, $description]);
    
    // Send email notification
    $to = 'info@pini-sagiv.co.il'; // Your email address
    $subject = 'פנייה חדשה מהאתר - ' . $full_name;
    
    $email_body = "
    <html>
    <head>
        <title>פנייה חדשה מהאתר</title>
        <meta charset='UTF-8'>
    </head>
    <body dir='rtl'>
        <h2>פנייה חדשה מהאתר</h2>
        <p><strong>שם מלא:</strong> $full_name</p>
        <p><strong>טלפון:</strong> $phone_number</p>
        <p><strong>דוא\"ל:</strong> $email</p>
        <p><strong>תיאור המצב:</strong></p>
        <p>$description</p>
        <hr>
        <p><small>הפנייה התקבלה ב: " . date('d/m/Y H:i:s') . "</small></p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: website@pini-sagiv.co.il" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Send email using PHP mail() function
    $email_sent = mail($to, $subject, $email_body, $headers);
    
    if ($email_sent) {
        echo json_encode(['success' => true, 'message' => 'Form submitted and email sent successfully']);
    } else {
        echo json_encode(['success' => true, 'message' => 'Form submitted successfully, but email sending failed']);
    }
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}
?>
