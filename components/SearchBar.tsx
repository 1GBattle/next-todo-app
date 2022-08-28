import React from 'react'
import Image from 'next/image'
import styles from '../styles/SearchBar.module.css'

const SearchBar: React.FC = () => {
	return (
		<div className={styles.searchBarContainer}>
			<input
				className={`input ${styles.searchBar}`}
				type='text'
				placeholder='Search'
			/>
			<Image
				className={styles.searchIcon}
				src='/search-icon.png'
				alt='search icon'
				width={30}
				height={30}
			/>
		</div>
	)
}

export default SearchBar
