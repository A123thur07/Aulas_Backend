let diaSemana= 'Sexta';

switch (diaSemana){
    case 'segunda' :// if (diaSemana == 'Segunda')
        console.log('Hoje tem SENAI');
        break;
    case 'Terça': // if (diaSemana == 'Terça')
        console.log('Hoje tem SENAI');
        break;
    case 'Quarta':  // if (diaSemana == 'Quarta')      //   outra possibilidade de fazer switch com o mesmo valor é:
        console.log('Hoje tem aula do SESI');          //   case 'Quarta' :
        break;                                         //   case 'Quinta' :
    case 'Quinta': // if (diaSemana == 'Quinta')       //   case 'Sexta' :
        console.log('Hoje tem aula do SESI');          //       console.log('Hoje tem aula do SESI');          
        break;                                         //       break;
    case 'Sexta': // if (diaSemana == 'Sexta')         //   que é do mesmo jeito que um if (diaSemana == 'Quarta' ||  diaSemana == 'Quinta' || diaSemana == 'Sexta')
        console.log('Hoje tem aula do SESI');          //
        break;                                         //
}
