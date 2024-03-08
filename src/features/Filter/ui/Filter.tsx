import { FormItem, FormLayoutGroup, Radio } from "@vkontakte/vkui";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { filterSelector, setFilter } from "../model/filterSlice";
import { FILTERS_COLOR_MAP, FILTERS_FRIENDS, FILTERS_TYPE } from "../lib/constants";
import { selectColors } from "@/entities/Group/api";
import { isEmpty } from "@/shared/lib/array";

export const Filter = () => {
    const { type, color, friends } = useAppSelector(filterSelector);
    const colors = useAppSelector(selectColors);
    const avatarColors = ["all", ...colors];

    const dispatch = useAppDispatch();

    const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.currentTarget;
        dispatch(setFilter({ [name]: value }));
    };

    return (
        <FormLayoutGroup mode="horizontal">
            <FormItem top="Тип приватности">
                {FILTERS_TYPE.map(({ value, label }) => {
                    return (
                        <Radio
                            key={value}
                            name="type"
                            value={value}
                            onChange={onChangeFilter}
                            defaultChecked={value === type}
                        >
                            {label}
                        </Radio>
                    );
                })}
            </FormItem>

            {!isEmpty(avatarColors) && (
                <FormItem top="Цвет аватара">
                    {avatarColors.map((value) => {
                        return (
                            <Radio
                                key={value}
                                name="color"
                                value={value}
                                onChange={onChangeFilter}
                                defaultChecked={value === color}
                            >
                                {FILTERS_COLOR_MAP[value] || value}
                            </Radio>
                        );
                    })}
                </FormItem>
            )}

            <FormItem top="Наличие друзей в группе">
                {FILTERS_FRIENDS.map(({ value, label }) => {
                    return (
                        <Radio
                            key={label}
                            name="friends"
                            value={value}
                            onChange={onChangeFilter}
                            defaultChecked={value === friends}
                        >
                            {label}
                        </Radio>
                    );
                })}
            </FormItem>
        </FormLayoutGroup>
    );
};
