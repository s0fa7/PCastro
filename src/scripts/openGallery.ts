// /public/scripts/openGallery.ts
// Типизированный код для открытия модального окна галереи

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('photo-modal')!;
  const modalImage = document.getElementById('modal-image') as HTMLImageElement;
  const closeBtn = document.getElementById('modal-close')!;
  const galleries = document.querySelectorAll('.photo-gallery');

  galleries.forEach((gallery) => {
    gallery.addEventListener('click', async (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName !== 'IMG') return;

      const index = Number(target.dataset.index);

      try {
        // AJAX-запрос (например, за оригинальными фото)
        const response = await fetch('/api/photos');
        if (!response.ok) throw new Error('Ошибка загрузки фотографий');
        const photos: string[] = await response.json();

        modalImage.src = photos[index];
        modal.classList.remove('hidden');
      } catch (error) {
        console.error(error);
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
});
