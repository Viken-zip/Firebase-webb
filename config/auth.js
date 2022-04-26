const {auth} = require('./FBconfig')

async function decoderIDToken(req, res, next){
    const header = req.headers.cookie
    if(header !== 'Bearer null' && req.headers?.cookie?.startsWith('Bearer ')){
        const idToken = req.headers.cookie.split('Bearer ')[1]
        try {
            const decodedIDToken = await auth.verifyIdToken(idToken)
            req['currentUser'] = decodedIDToken
            //console.log('ok')
            next()
        } catch (err) {
            console.log(err);
            res.render('login')
        }
    }else {
        console.log('no token');
        res.render('login')
    }
    next();
}
module.exports = decoderIDToken