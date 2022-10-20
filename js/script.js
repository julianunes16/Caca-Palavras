<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <title>Caça-Palavras</title>
</head>
<body>
    <script>
        matriz = new Array;
        matriz = [
            ["A","","C","A","P","I","V","A","R","A","","","","","P"],
            ["N","","","","","","","","","","","","","","E"],
            ["T","A","M","A","N","D","U","A","","","O","","","","I"],
            ["A","","","","","","","","","","R","","","","X"],
            ["","","","B","A","G","R","E","","","N","","","","E"],
            ["","","","O","","","","","","","I","","","",""],
            ["","","","I","","","","","","","T","","","",""],
            ["","C","A","C","H","O","R","R","O","","O","","","",""],
            ["","","","","","","","","","","R","","","",""],
            ["","","","","","","P","A","T","O","R","","","",""],
            ["","S","","","","","","","","","I","","","",""],
            ["","A","","","","","","","","","N","","","",""],
            ["","P","","","","","","","","","C","","","",""],
            ["","O","","","","","","","","","O","","","",""],
            ["","","","","","","","","","","","","","",""],
        ];

        window.onload = function(){
            for(let node of document.querySelectorAll("td")){
                if(node.textContent != ""){
                    node.className = "selected";
                }
                else{
                    let charcode = Math.round(65 + Math.random() * 25)
                    node.textContent = String.fromCharCode(charcode)
                }
            }
        }

        document.write("<h1>Caça-Palavras com animais muito maluquinhos! :D</h1><table border='1' align='center'>");
        for (linha = 0; linha < 15; linha++){
            document.write("<tr>")
            for(coluna = 0; coluna < 15; coluna++){
                document.write("<td>" + matriz[linha][coluna] + "</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>")
    </script>
</body>
</html>