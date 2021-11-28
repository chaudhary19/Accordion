import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	const [visible, setVisible] = useState(false);

    const clickHandler = (event) => {
        if(visible === false)
            setVisible(true);
        else
            setVisible(false);
    }

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={clickHandler}>{visible ? "-" : "+"}</button>
			</header>
			{visible ? <p>{info}</p> : null}
		</article>
	)
}

export default Question
