<?php
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_POST["name"]
        $lastName = $_POST["last-name"]
        $headers = $_POST["email"]
        $phone = $_POST["phone"]
        $subject = 'FORMULARZ KONTAKTOWY PLANETCAR - Ktoś zadał Ci pytanie!!!';
        $formMessage = $_POST["message"]
        $to = "mastalskid79@gamil.com"
        $message = "
            Od: $headers
            Imię i Nazwisko: $name $lastName
            Numer telefonu: $phone
            Wiadomość: $formMessage
        "

        if(mail($to, $subject, $message, $headers)){
            echo "Wiadomość została wysłana pomyślnie.";
        }else{
            echo "Wystąpił błąd podczas wysyłania wiadomości.";
        }
    }else{
        header("Location: index.html")
        exit();
    }
?>