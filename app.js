const readline = require('readline');
const Usuario = require('./models/Usuario');
const Video = require('./models/Video');
const Comentario = require('./models/Comentario');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function perguntar(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function testeAutomatico() {
  try {
    console.log('\nExecutando testes automáticos...');
    console.log('\nCriando usuário, vídeo e comentário...');
    const userId = await Usuario.criar({ nome: 'Teste', email: 'teste@email.com', senha: '1234' });
    console.log('Usuário criado com ID:', userId);

    const videoId = await Video.criar({ titulo: 'Meu vídeo', descricao: 'Descrição', url: 'http://url.com', idUsuario: userId });
    console.log('Vídeo criado com ID:', videoId);

    const comentarioId = await Comentario.criar({ texto: 'Muito bom!', idUsuario: userId, idVideo: videoId });
    console.log('Comentário criado com ID:', comentarioId);

    console.log('\nLendo usuário, vídeo e comentário...');
    const usuario = await Usuario.buscarPorId(userId);
    console.log('Usuário:', usuario);

    const video = await Video.buscarPorId(videoId);
    console.log('Vídeo:', video);

    const comentario = await Comentario.buscarPorId(comentarioId);
    console.log('Comentário:', comentario);

    console.log('\nDeletando comentário, vídeo e usuário...');
    const comentarioDeleted = await Comentario.deletar(comentarioId);
    console.log('Usuário deletado com ID:', comentarioDeleted);

    const videoDeleted = await Video.deletar(videoId);
    console.log('Usuário deletado com ID:', videoDeleted);

    const userIdDeleted = await Usuario.deletar(userId);
    console.log('Usuário deletado com ID:', userIdDeleted);

    console.log('\nTestes automáticos concluídos.');
  } catch (err) {
    console.error('Erro durante os testes automáticos:', err.message);
  } finally {
    rl.close();
  }
}

async function menu() {
  console.log('\nEscolha uma opção:');
  console.log('1. Teste Manual');
  console.log('2. Teste Automático');
  console.log('0. Sair');

  const opcao = await perguntar('Digite sua opção: ');

  if (opcao === '1') {
    await menuManual();
  } else if (opcao === '2') {
    await testeAutomatico();
  } else if (opcao === '0') {
    console.log('Saindo...');
    rl.close();
  } else {
    console.log('Opção inválida. Tente novamente.');
    menu();
  }
}

async function menuManual() {
  console.log('\nEscolha uma opção:');
  console.log('1. Criar Usuário');
  console.log('2. Criar Vídeo');
  console.log('3. Criar Comentário');
  console.log('4. Ler Usuário');
  console.log('5. Ler Vídeo');
  console.log('6. Ler Comentário');
  console.log('7. Deletar Comentário');
  console.log('8. Deletar Vídeo');
  console.log('9. Deletar Usuário');
  console.log('0. Voltar');

  const opcao = await perguntar('Digite sua opção: ');

  try {
    switch (opcao) {
      case '1':
        const nome = await perguntar('Digite o nome do usuário: ');
        const email = await perguntar('Digite o email do usuário: ');
        const senha = await perguntar('Digite a senha do usuário: ');
        const userId = await Usuario.criar({ nome, email, senha });
        console.log('Usuário criado com ID:', userId);
        break;
      case '2':
        const titulo = await perguntar('Digite o título do vídeo: ');
        const descricao = await perguntar('Digite a descrição do vídeo: ');
        const url = await perguntar('Digite a URL do vídeo: ');
        const idUsuarioVideo = await perguntar('Digite o ID do usuário: ');
        const videoId = await Video.criar({ titulo, descricao, url, idUsuario: idUsuarioVideo });
        console.log('Vídeo criado com ID:', videoId);
        break;
      case '3':
        const texto = await perguntar('Digite o texto do comentário: ');
        const idUsuarioComentario = await perguntar('Digite o ID do usuário: ');
        const idVideoComentario = await perguntar('Digite o ID do vídeo: ');
        const comentarioId = await Comentario.criar({ texto, idUsuario: idUsuarioComentario, idVideo: idVideoComentario });
        console.log('Comentário criado com ID:', comentarioId);
        break;
      case '4':
        const userIdRead = await perguntar('Digite o ID do usuário: ');
        const usuario = await Usuario.buscarPorId(userIdRead);
        console.log('Usuário:', usuario);
        break;
      case '5':
        const videoIdRead = await perguntar('Digite o ID do vídeo: ');
        const video = await Video.buscarPorId(videoIdRead);
        console.log('Vídeo:', video);
        break;
      case '6':
        const comentarioIdRead = await perguntar('Digite o ID do comentário: ');
        const comentario = await Comentario.buscarPorId(comentarioIdRead);
        console.log('Comentário:', comentario);
        break;
      case '7':
        const comentarioIdDelete = await perguntar('Digite o ID do comentário a ser deletado: ');
        const comentarioDeleted = await Comentario.deletar(comentarioIdDelete);
        console.log('Comentário deletado com ID:', comentarioDeleted);
        break;
      case '8':
        const videoIdDelete = await perguntar('Digite o ID do vídeo a ser deletado: ');
        const videoDeleted = await Video.deletar(videoIdDelete);
        console.log('Vídeo deletado com ID:', videoDeleted);
        break;
      case '9':
        const userIdDelete = await perguntar('Digite o ID do usuário a ser deletado: ');
        const userDeleted = await Usuario.deletar(userIdDelete);
        console.log('Usuário deletado com ID:', userDeleted);
        break;
      case '0':
        await menu();
        return;
      default:
        console.log('Opção inválida. Tente novamente.');
    }
    menuManual();
  } catch (err) {
    console.error('Erro:', err.message);
    menuManual();
  }
}

// Inicia o menu principal
menu();
