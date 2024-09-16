import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskForm.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';

interface PropsTaskForm { 
    onAddTask: (taskTitle: string) => void;
}

export function TaskForm({ onAddTask }: PropsTaskForm){
    const [title, setTitle] = useState('');

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value);
    }

    return (
        <div className={styles.div}>
            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    placeholder='Adicione uma nova tarefa' 
                    onChange={onChangeTitle} 
                    value={title}
                />
                <button>
                    Criar
                    <PlusCircle size={18}/>
                </button>
            </form>
        </div>
    )
}