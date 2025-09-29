const operacoes= (operador,n1,n2)=>{
    if (operador== '-') {
        console.log(n1-n2); 
    } else if(operador== '+'){
       console.log(n1+n2 ); 
    } else if(operador== 'x'){
        console.log(n1*n2 );
    } else if(operador== '/'){
        console.log( n1/n2 ); 
    } else {
        console.log('operador indefinido');
        
    }
}
operacoes('+',1,2);
operacoes('-',1,2);
operacoes('x',1,2);
operacoes('/',1,2);