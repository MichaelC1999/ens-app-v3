import { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

import { Dialog, mq } from '@ensdomains/thorin'

const Wrapper = styled.div<{ $fullWidth?: boolean }>(
  ({ theme, $fullWidth }) => css`
    border-bottom: 1px solid ${theme.colors.border};
    width: 100%;
    padding-bottom: ${theme.space['4']};

    ${$fullWidth &&
    css`
      width: calc(100% + 2 * ${theme.space['4']});
      margin: -${theme.space['4']};
      padding: ${theme.space['4']};
    `}

    ${mq.sm.min(css`
      ${$fullWidth &&
      css`
        width: calc(100% + 2 * ${theme.space['6']});
        margin: 0 -${theme.space['6']} -${theme.space['6']} -${theme.space['6']};
        padding: 0 ${theme.space['6']} ${theme.space['4']} ${theme.space['6']};
      `}
    `)}
  `,
)

type Props = ComponentProps<typeof Dialog.Heading> & { fullWidth?: boolean }

export const DialogHeadingWithBorder = ({ fullWidth, ...props }: Props) => {
  return (
    <Wrapper $fullWidth={fullWidth}>
      <Dialog.Heading {...props} />
    </Wrapper>
  )
}
