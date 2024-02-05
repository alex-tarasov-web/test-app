import { useTranslation } from 'react-i18next'
import { type FC } from 'react'
import {Box} from "@mui/material";
interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
        <Box sx={{ display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 1, }}>
          {t('Page not found')}
        </Box>
  )
}
