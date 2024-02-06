import { useTranslation } from 'react-i18next'
import {Box} from "@mui/material";
export const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
        <Box sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {t('Page not found')}
        </Box>
  )
}
