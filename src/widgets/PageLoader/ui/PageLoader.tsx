import {Loader} from "../../../shared/config/ui/Loader/Loader";
import {Box} from "@mui/material";

export const PageLoader = () => {
  return (
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1 }}>
            <Loader />
        </Box>
  )
}
