const btn_imp=document.getElementById("btn_imp")

btn_imp.addEventListener("click",(evt)=>{
  const conteudo=document.getElementById("tabela").innerHTML;
  //você define o style
  let estilo="<style>";
  estilo += "table {width: 100%;font: 25px Calibri;}";
  estilo += "table, th, td {border: solid 2px #2e2323; border-collapse: collapse;";
  estilo += "padding: 4px 8px;text-align: center;}";
  estilo += "</style>";

  // você criou uma janela e vai anexar o conteúdo dentro dela
  const win = window.open('', '', 'heigth=700,width=700');
  
  win.document.write('<html><head>')
  win.document.write('<title>CBF Cursos</title>');
  win.document.write(estilo);// você anexa o style dentro da página.
  win.document.write('</head>');
  win.document.write('<body>');
  win.document.write(conteudo); //você anexa tabela dentro da janela
  win.document.write('</body></html>');
  win.print() // você retorna o método print
})
