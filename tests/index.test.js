const {LinkedInTag} = require('../index.js');
let linkedin = 0;


describe("index.js",()=>{
    const partnerId = '578435';
    const conversionId = '454676';
    const subDomain = 'dc';

    beforeAll(()=>{
        document.body.innerHTML='<script src=""/>';
        linkedin = new LinkedInTag();
    });

    
    it("should be properly initialized",()=>{
        expect(linkedin.partnerId).toEqual('')
        expect(linkedin.subDomain).toEqual('dc');
        expect(linkedin.initialized).toEqual(false);
    });

    it('init() should insert the LinkedIn insight.min.js script',()=>{
        linkedin.init(partnerId,'dc')
        // Extract all script src strings from the DOM
        let scripts = [];
        const scriptElms = document.getElementsByTagName('script');
        Array.prototype.slice.call(scriptElms).forEach((elm) => { scripts.push(elm.src); });
        // Assert if it correctly inserted the LinkedIn script
        expect(scripts).toEqual(
            expect.arrayContaining(['https://snap.licdn.com/li.lms-analytics/insight.min.js'])
        );
        expect(linkedin.initialized).toEqual(true);
        expect(linkedin.partnerId).toEqual(partnerId);
        expect(linkedin.subDomain).toEqual('dc');
    });
    
    it('track() should return url',()=>{
        const url = linkedin.track(conversionId,partnerId,subDomain);

        expect(url).toEqual(`https://${subDomain}.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif&conversionId=${conversionId}`);
    });
});