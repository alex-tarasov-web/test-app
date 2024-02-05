import {Loader} from "../../../shared/config/ui/Loader/Loader";
import {Box} from "@mui/material";

export const PageLoader = () => {
  return (
        <Box sx={{
          // minHeight: calc(100vh - var(--navbar-height))
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1 }}>
            <Loader />
        </Box>
  )
}
