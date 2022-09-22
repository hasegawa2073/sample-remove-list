export const DoneList = () => {
    const doneButtons = document.querySelectorAll('.todo__button');
    doneButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const target = e.currentTarget;
            const targetList = target.parentElement;
            const targetText = targetList?.querySelector('.todo__text');
            target.classList.toggle('todo__button-active');
            targetText?.classList.toggle('todo__text-done');
        });
    });
};
