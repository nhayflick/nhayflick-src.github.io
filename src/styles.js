export default theme => ({
    root: {
        margin: '0 auto'
    },

    outerContainer: {
        margin: '0 auto',
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        flex: '1 1 100%',
        [theme.breakpoints.between('sm', 'xl')]: {
            paddingLeft: theme.spacing.unit * 6,
            paddingRight: theme.spacing.unit * 6
        }
    },

    innerContainer: {
        margin: 'auto',
        [theme.breakpoints.between('md', 'xl')]: {
            maxWidth: theme.spacing.unit * 100
        }
    },

    portfolioHeading: {},

    bigLineSpacing: {
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 6
    },

    flex: {
        flex: 1,
        textAlign: 'left'
    },

    objectFitCover: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },

    contentSection: {
        textAlign: 'left',
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
    },

    productImage: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        marginBottom: 0
    },

    nextLink: {
        float: 'right'
    },

    footerContainer: {
        margin: 'auto',
        textAlign: 'center'
    },

    footerIcon: {
        display: 'inline-block',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 6,
        paddingLeft: theme.spacing.unit * 1,
        paddingRight: theme.spacing.unit * 1,
    }
});