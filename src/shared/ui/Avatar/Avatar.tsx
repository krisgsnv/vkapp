import style from "./style.module.css";

interface IAvatarProps {
    color?: string;
}

export const Avatar = ({ color }: IAvatarProps) => {
    return <div className={style.avatar} style={{backgroundColor: color || 'transparent'}}></div>;
};
