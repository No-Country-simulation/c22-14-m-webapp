import { colors } from "./colors"

const components = {
    components: {
        MuiButton: {
            styleOverrides: {
              root: {
                margin: "5px",
                textTransform: "none", // Desactiva el texto en mayúsculas
                borderRadius: 8, // Redondeo
                fontWeight: 600, // Peso de la fuente
                padding: "8px 16px", // Padding predeterminado
                textDecoration: "none", // Sin subrayado
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Sombra básica
                "&:hover": {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Sombra en hover
                },
              },
              containedPrimary: {
                backgroundColor: "#1976d2",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#115293",
                },
              },
              containedSecondary: {
                backgroundColor: "#dc004e",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#9a0036",
                },
              },
              outlined: {
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                },
              },
              text: {
                color: colors.palette.secondary.main,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                },
              },
            },
            defaultProps: {
              variant: "contained",
              color: "primary",
            },
          },
    },
}

export {components } 