export const DoneList = () => {
  const todoUl = document.querySelector<HTMLUListElement>('.todo__ul');
  todoUl?.addEventListener('click', (e) => {
    const target = e.target as HTMLButtonElement;
    if (target.classList.contains('todo__button')) {
      const targetList = target.parentElement;
      const targetText = targetList?.querySelector('.todo__text');
      target.classList.toggle('todo__button-active');
      targetText?.classList.toggle('todo__text-done');
    }
  });
};
