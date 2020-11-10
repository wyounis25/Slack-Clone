import React from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './Header.css';
import { useStateValue } from './StateProvider';

export default function Header() {
	const [{user}] = useStateValue()

	return (
		<div className="header">
			<div className="header__left">
				{/* Avatar for logged in user */}
				<Avatar className="header__avatar" 
				// alt="Remy Sharp"
				//src="/static/images/avatar/1.jpg"
				alt={user?.displayName}
				src={user?.photoUrl}/>
				{/* Time Icon */}
				<AccessTimeIcon />
			</div>

			<div className="header__search">
				{/* Search Icon */}
				<SearchIcon />
				{/* input */}
				<input placeholder="Walid Search" />
			</div>

			<div className="header__right">
				{/* Help icon */}
				<HelpOutlineIcon />
			</div>
		</div>
	);
}
