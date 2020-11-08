import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__info">
					<h2>Walid's Bar</h2>
					<h3>
						<FiberManualRecordIcon />
						Walid Younis
					</h3>
				</div>
                <CreateIcon/>
                <sidebarOption/>

			</div>
		</div>
	);
}
