export const DoneList = () => {
    const todoUl = document.querySelector('.todo__ul');
    todoUl?.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('todo__button')) {
            const targetList = target.parentElement;
            const targetText = targetList?.querySelector('.todo__text');
            target.classList.toggle('todo__button-active');
            targetText?.classList.toggle('todo__text-done');
        }
    });
};
