import { FormControl, Select as MuiSelect, MenuItem } from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const languageSet = [
  { label: '中文', value: 'cn' },
  { label: '日本語', value: 'jp' },
  { label: 'English', value: 'en' },
]

const useStyles = makeStyles({
  select: {
    minWidth: '200px',
  },
  icon: {
    color: deepPurple[500],
  },
  paper: {
    borderRadius: 4,
    marginTop: 8,
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    background: 'white',
    '& li': {
      fontWeight: 200,
      paddingTop: 12,
      paddingBottom: 12,
    },
    '& li:hover': {
      background: deepPurple[100],
    },
    '& li.Mui-selected': {
      color: 'white',
      background: deepPurple[400],
    },
    '& li.Mui-selected:hover': {
      background: deepPurple[500],
    },
  },
})

const Select = ({ value, onChange }) => {
  const classes = useStyles()

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  }

  return (
    <FormControl variant="outlined">
      <MuiSelect
        classes={{ root: classes.select }}
        IconComponent={ExpandMoreIcon}
        MenuProps={menuProps}
        value={value}
        onChange={onChange}>
        {languageSet.map(lang => (
          <MenuItem key={lang.value} value={lang.value}>
            {lang.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select
