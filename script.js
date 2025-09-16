// Interatividade para os botões de reação
document.getElementById('like-btn').addEventListener('click', function() {
    let likeCount = document.getElementById('like-count');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
});

document.getElementById('love-btn').addEventListener('click', function() {
    let loveCount = document.getElementById('love-count');
    loveCount.textContent = parseInt(loveCount.textContent) + 1;
});

document.getElementById('share-btn').addEventListener('click', function() {
    alert('Notícia compartilhada com sucesso!');
});

// Função para o formulário de comentários
document.querySelector('.comment-form button').addEventListener('click', function() {
    const textarea = document.querySelector('.comment-form textarea');
    const comment = textarea.value.trim();
    
    if (comment !== '') {
        const commentsContainer = document.querySelector('.comments');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        
        const timeString = `Há poucos minutos`;
        
        newComment.innerHTML = `
            <div class="comment-header">
                <span>Usuário Anônimo</span>
                <span>${timeString}</span>
            </div>
            <p>${comment}</p>
        `;
        
        commentsContainer.insertBefore(newComment, document.querySelector('.comment-form'));
        textarea.value = '';
        
        alert('Comentário adicionado com sucesso!');
    } else {
        alert('Por favor, digite um comentário antes de enviar.');
    }
});
