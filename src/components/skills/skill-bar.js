import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const SkillBar = ({ className, name, level, description }) => {
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);
  return (
    <HtmlTooltip
      title={
        <Typography color="inherit">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Typography>
        
      }
    >
      <div className={className}>
        <label htmlFor={`${name}-bar`}>{name}</label>
        <div id={`${name}-bar`} className='skill__bar'>
          <div className='skill__level'></div>
        </div>
      </div>
    </HtmlTooltip>
  )
}

SkillBar.displaName = 'SkillBar'

export default styled(SkillBar)`
  width: 100%;
  .skill__bar {
    width: 100%;
    height: 10px;
    background-color: lightgrey;
    padding: 1px;
  }
  .skill__level {
    background-color: #25303B;
    width: ${p => p.level || 0}%;
    height: 8px;
  }
`
