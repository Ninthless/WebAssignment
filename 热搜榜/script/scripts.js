function switchTab(tabId) {
    document.querySelectorAll('.tab,.list').forEach(el => el.classList.remove('active'));
    document.querySelector(`.tab[onclick="switchTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}