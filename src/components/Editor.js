import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as CtrlEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {
	const { language, displayName, value, onChange } = props;

	const [open, setOpen] = useState(true);

	function handleChange(throwaway_1, throwaway_2, value) {
		onChange(value);
	}

	return (
		<div className={`editor-container ${open ? '' : 'collapsed'}`}>
			<div className="editor-title">
				{displayName}
				<button
					onClick={() => setOpen((prevOpen) => !prevOpen)}
					type="button"
					className="expand-collapse-btn"
				>
					<FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
				</button>
			</div>
			<CtrlEditor
				onBeforeChange={handleChange}
				value={value}
				className="codemirror-wrapper"
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					lineNumbers: true,
					theme: 'material',
				}}
			/>
		</div>
	);
}
