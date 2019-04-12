import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'

export function HomeSearch (props) {
  return (
    <form>
      <TextField
        variant='filled'
        label='Buscar eventos'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}

export default HomeSearch
