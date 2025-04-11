document.getElementById('toggle').addEventListener('change', function () {
    if (this.checked) {
      console.log('Đang bật');
    } else {
      console.log('Đang tắt');
    }
  });

// Lấy container để hiển thị danh sách tiện ích
const extensionsList = document.getElementById('extensionsList');

// Hàm tải dữ liệu từ file JSON
fetch('/browser-extensions-manager-ui-main/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    // Duyệt qua từng tiện ích trong JSON và tạo HTML
    data.forEach(extension => {
      // Tạo phần tử HTML cho mỗi tiện ích
      const extensionCard = document.createElement('div');
      extensionCard.classList.add('extension-card');

      extensionCard.innerHTML = `
       <div class="extention-item">
        <div class="extension-card__icon">
          <img src="${extension.logo}" alt="${extension.name}" />
        </div>
        <div class="extension-card__content">
          <h3 class="extension-card__title">${extension.name}</h3>
          <p class="extension-card__description">${extension.description}</p>
        </div>
        </div>
        <div class="extension-card__actions">
          <button class="extension-card__remove-btn">Remove</button>
          <label class="toggle-switch">
            <input type="checkbox" ${extension.isActive ? 'checked' : ''} />
            <span class="slider"></span>
          </label>
        </div>
      `;

      // Thêm phần tử vào container
      extensionsList.appendChild(extensionCard);
    });
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });