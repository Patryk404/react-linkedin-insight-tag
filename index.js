export class LinkedInTag {
        constructor(){
                this.partnerId='';
                this.subDomain = 'dc';
                this.initialized = false;
        }

        init(partnerId, subDomain){
                this.partnerId = partnerId;
                this.subDomain = subDomain;
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(partnerId);

                const script = document.getElementsByTagName('script')[0];
                const tagScript = document.createElement('script');
                tagScript.type = 'text/javascript';
                tagScript.async = true;
                tagScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
                script.parentNode.insertBefore(tagScript, script);
                this.initialized = true;
        }

        track(conversionId, partnerId, subDomain) {
                partnerId = partnerId || this.partnerId || window._linkedin_data_partner_ids[0];
                subDomain = subDomain || this.subDomain;
            
                let url = `https://${subDomain}.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`;
                if(conversionId) {
                  url = `${url}&conversionId=${conversionId}`;
                }
            
                return url;
        }
} 

export default new LinkedInTag()
