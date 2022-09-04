import React from 'react'
import Image from 'next/image'
import styles from '../styles/SearchBar.module.css'

interface Props {
	searchTerm: string
	setSearchTerm: (searchTerm: string) => void
}

const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className={styles.searchBarContainer}>
			<input
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
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
