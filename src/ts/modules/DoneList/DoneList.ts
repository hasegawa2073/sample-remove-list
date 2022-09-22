export const DoneList = () => {
  const doneButtons =
    document.querySelectorAll<HTMLButtonElement>('.todo__button');
  doneButtons.forEach((button) => {
    button.addEventListener('click', (e: MouseEvent) => {
      const target = e.currentTarget as HTMLButtonElement;
      const targetList = target.parentElement;
      const targetText = targetList?.querySelector('.todo__text');
      target.classList.toggle('todo__button-active');
      targetText?.classList.toggle('todo__text-done');
    });
  });
};
