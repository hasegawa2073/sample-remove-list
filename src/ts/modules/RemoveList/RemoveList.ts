export const RemoveList = () => {
  const todoUl = document.querySelector<HTMLUListElement>('.todo__ul');
  todoUl?.addEventListener('click', (e) => {
    const target = e.target as HTMLButtonElement;
    const targetList = target.parentElement;
    let timeoutID = undefined;
    timeoutID = setTimeout(() => {
      targetList?.remove();
    }, 2000);
    if (!target.classList.contains('todo__button-active')) {
      clearTimeout(timeoutID - 1);
      clearTimeout(timeoutID);
    }
  });
};
