import React, {FC, useState} from 'react';

interface TodoFormProps {
    onAdd(title:string):void
}
const TodoFrom: FC<TodoFormProps> = ({onAdd}) => {

    const [title, setTitle] = useState<string>('')


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handlePress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className={'input-field'}>
            <input
                value={title}
                onChange={handleChange}
                type="text"
                placeholder={'Введите дело'}
                onKeyPress={handlePress}
            />
        </div>
    );
};

export default TodoFrom;