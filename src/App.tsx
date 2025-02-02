import {useState} from "react";
import {Radio, RadioGroup} from "./Radio.tsx";
import {Heart} from "./icons/heart.tsx";
import FilledHeart from "./icons/filled-heart.tsx";
import {Star} from "./icons/star.tsx";
import {FilledStar} from "./icons/filled-star.tsx";

export default function App() {
    const [radioValue1, setRadioValue1] = useState<string>('Yes')
    const [radioValue2, setRadioValue2] = useState<string>('Yes')
    return (
        <div className={'p-8 max-w-2xl mx-auto space-y-4'}>
            <fieldset className={'border border-gray-300 p-3 space-y-2'}>
                <legend>Do you have pets?</legend>
                <RadioGroup
                    checkedIcon={<FilledHeart/>}
                    icon={<Heart/>}
                    onChange={(e) => setRadioValue1(e.currentTarget.value)}
                    value={radioValue1}>
                    <Radio value={'Yes'}>Yes</Radio>
                    <Radio value={'No'}>No</Radio>
                    <p>Selected: {radioValue1}</p>
                </RadioGroup>
            </fieldset>

            <fieldset className={'border border-gray-300 p-3 space-y-2'}>
                <legend>Do you like cats?</legend>
                <RadioGroup
                    checkedIcon={<Star/>}
                    icon={<FilledStar/>}
                    onChange={(e) => setRadioValue2(e.currentTarget.value)}
                    value={radioValue2}>
                    <Radio value={'Yes'}>Yes</Radio>
                    <Radio value={'No'}>No</Radio>
                    <p>Selected: {radioValue2}</p>
                </RadioGroup>
            </fieldset>
        </div>
    )
}
