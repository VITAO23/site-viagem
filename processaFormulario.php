<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  exit('Método não permitido.');
}

$servername = getenv('DB_HOST') ?: 'localhost';
$username = getenv('DB_USER') ?: 'id22247061_grupo';
$password = getenv('DB_PASSWORD') ?: 'Trabalho2024@';
$dbname = getenv('DB_NAME') ?: 'id22247061_viagem';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  http_response_code(500);
  exit('Falha na conexão com o banco de dados.');
}

$nome = trim($_POST['nome'] ?? '');
$email = trim($_POST['email'] ?? '');
$pacote = trim($_POST['pacote'] ?? '');
$mensagem = trim($_POST['mensagem'] ?? '');
$newsletter = isset($_POST['newsletter']) && $_POST['newsletter'] === 'sim' ? 'sim' : 'nao';

if ($nome === '' || $email === '' || $pacote === '') {
  http_response_code(400);
  exit('Campos obrigatórios não informados.');
}

$stmt = $conn->prepare('INSERT INTO Reservas (nome, email, pacote, mensagem, newsletter) VALUES (?, ?, ?, ?, ?)');

if (!$stmt) {
  http_response_code(500);
  exit('Falha ao preparar a consulta.');
}

$stmt->bind_param('sssss', $nome, $email, $pacote, $mensagem, $newsletter);

if ($stmt->execute()) {
  echo 'Novo registro criado com sucesso';
} else {
  http_response_code(500);
  echo 'Erro ao salvar a reserva.';
}

$stmt->close();
$conn->close();
?>
