// Добавляем обработчик клика на кнопку открытия модального окна
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  // Добавляем обработчик клика на всем документе
  document.body.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
      // Если клик произошел вне модального окна, закрываем его
      document.getElementById('modal').style.display = 'none';
    }
  });
  
  // Добавляем обработчик клика на кнопку закрытия модального окна
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });