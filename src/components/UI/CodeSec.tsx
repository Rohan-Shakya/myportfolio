import React, {Dispatch, memo, SetStateAction} from 'react';
import Card from "./Card";
import "../stylesheets/components/UI/CodeSec.scss"
import {TypeAnimation} from 'react-type-animation';
import AboutMePage from "../../data/about_me"


type Props = {
    my_data: AboutMePage
    active: string
    setActive: Dispatch<SetStateAction<'python' | 'js' | 'java'>>
}

export const CodeSec = ({my_data, active, setActive}: Props) => {
    const code = (arg: string) => {
        switch (arg) {
            case "python":
                return <>
                    <p>from Crypto.Cipher import AES</p>
                    <p> key = b'I can encrypt too, because security is important !'</p>
                    <p>cipher = AES.new(key, AES.MODE_EAX)</p>
                </>
            case "js":
                return <>
                    <p>const bestFrameWork = "React";</p>
                    <p>if(bestFrameWork != "React")</p>
                    <p>console.log("mate you are joking right?");</p>
                </>
            default:
                return <>
                    <p>var c = 'I hate polymorphism' ;</p>
                    <p>console.log(typeof(c)); // string</p>
                    <p>c = 123 ;</p></>
        }
    }

    return (
        <Card>
            <div className="code__sec-header">
                <button className={active === "python" ? "active" : ""} onClick={() => setActive("python")}>
                    <i className='bx bxl-python'></i>{my_data.python.title}
                </button>
                <button className={active === "js" ? "active" : ""} onClick={() => setActive("js")}>
                    <i className='bx bxl-javascript'></i>{my_data.js.title}
                </button>
                <button className={active === "java" ? "active" : ""} onClick={() => setActive("java")}>
                    <i className='bx bxl-java'></i>{my_data.java.title}
                </button>
            </div>
            <hr/>
            <div className="code__sec-body">
                <TypeAnimation
                    sequence={[
                        '/* I can also say dad jokes */',
                        1000,
                        '/* I can write unit tests too */',
                        2000,
                        '/* And I can lead a team ! */',

                    ]}
                    speed={50}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{fontSize: '1em'}}
                />
                <div className={"codes"}>
                    {code(active)}
                </div>
            </div>
        </Card>
    );
}

export default memo(CodeSec);
