import React from 'react';

export default function Accordion(props) {
    return (
        <form>
            <div className={`accordion ${props.large && "ac-m"}`}>
                {
                    (props.behavoir === "multiple")
                        ? <input id="demo_accordion_1" type="checkbox" name="demo_accordion_set_1" />
                        : <input id="demo_accordion_1" type="radio" name="demo_accordion_set_1" />
                }
                <label for="demo_accordion_1" className="ac-title">Label</label>
                <div className="ac-body">
                    <p className="ac-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto</p>
                </div>
            </div>
            <div className={`accordion ${props.large && "ac-m"}`}>
                {
                    (props.behavoir === "multiple")
                        ? <input id="demo_accordion_2" type="checkbox" name="demo_accordion_set_1" />
                        : <input id="demo_accordion_2" type="radio" name="demo_accordion_set_1" />
                }
                <label for="demo_accordion_2" className="ac-title">Label</label>
                <div className="ac-body">
                    <p className="ac-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto</p>
                </div>
            </div>
            <div className={`accordion ${props.large && "ac-m"}`}>
                {
                    (props.behavoir === "multiple")
                        ? <input id="demo_accordion_3" type="checkbox" name="demo_accordion_set_1" />
                        : <input id="demo_accordion_3" type="radio" name="demo_accordion_set_1" />
                }
                <label for="demo_accordion_3" className="ac-title">Label</label>
                <div className="ac-body">
                    <p className="ac-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto</p>
                </div>
            </div>
        </form>
    )
}
