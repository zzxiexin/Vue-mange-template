function GenerateRoutes(asyncRoutes, remoteRoutes) {
    const finalRoutes = []
    asyncRoutes.forEach(asyncR => {
        remoteRoutes.forEach(remoteR => {
            if (asyncR.path === remoteR.path) {
                if (asyncR.children) {
                    asyncR.children = GenerateRoutes(asyncR.children, remoteR.children)
                    finalRoutes.push(asyncR)
                } else {
                    finalRoutes.push(asyncR)
                }
            }
        })
    })
    return finalRoutes
}

export default GenerateRoutes;