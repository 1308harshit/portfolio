import "./portfolio.scss"
import { motion, useTransform } from "framer-motion"
import { useScroll, useSpring} from "framer-motion"
import { useRef } from "react"

const item = [
    {
        id: 1,
        title: "A2Z Dog Care",
        img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "I designed and implemented a dog service web platform featuring emergency assistance from hospitals and NGOs, grooming services, day-care options, and training center’s, all tailored for locality-specific needs. Utilizing Bootstrap and CSS for styling, ionicons and font-awesome for icons, and custom scripts for seamless transitions and enhanced user experience. The platform also includes location-based analysis for each service, optimizing user accessibility and efficiency. "
    }, 
    { 
        id: 2,
        title: "Personal Study Desk",
        // img: "https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=600",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIVFRUXGB0WGBUYFhgYGBkYFxgYFxYYGxcaHSggGBolGxcXITEhJSkrLi8uGB8zODMtNygtLisBCgoKDg0OGhAQFy0lHR0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABJEAACAAMEBgcEBggEBQUAAAABAgADEQQSITEFQVFhcYEGEyIykaHwB1KxwUJicpLR4RQVIzNTgpPSorLC8UNUY3PTFiRklJX/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACQRAQEAAgMBAAICAgMAAAAAAAABAhEDITESQVETgTKxIlJx/9oADAMBAAIRAxEAPwCPo7RfWIXslrNVEslXl0KzGZgKEE9XQkkMoNQSMakQadas1pdqsFXALX5AD3kr23ly82SuLKhoL2KoWrDGldFPZrcsqVMMpbQR1L1IAN7921MwGpyKxf2TTToFFsHZEy5+kqKGRPGAWcowlk1wmDsMrCtQxji49zrTHD9Xr/S+6PTlMsGXM62VkrA3rp1qa9pabDlldUDG2MQv0EXzNFEnEUZ1GEymQmL/AMQbCe0upts011ih418DrHhG8dM3oREPJDMPIcIFJEFTGBAgB5Idm908DDKw+4wPAwURWCLyXZUH0R5xRa40SHLhGXHF8vWgElfdHgIUEGweEHBxtpgIDGFiEjODjSEOAIEAQwEMv3hw+cPQye/y/GJyOHoECBFEKDgoOABAgQIAEVs81bnFlFWT2ox5fw04/R34ER7wgRjtq577QbK02zfsx+0kf+4D1xQICBTazHEDKktjqANhMKtNlzboaVa5fVTUIvK1ZZmyiwyIuiZLO28mwRN0oo6icDkZUyv9M/gIrtHAmxWTaFsp+60ofCojS9Vz2f8AL+k7QkppBNmJLIgvSGJq3VVoZbHNmlsQK61dNdYuXiKUqVOtTUcCKMPA+IESWilya6JMOyzDJhyWYFJIygVhK5QcBHxD8RkMSUgCrrlGhk5LwHwjPsYv7N3V4D4Rlxe1fL5D0CBBxvIwEM4VBa4OLhBAgQIYCGR3+Q+cPQynePrUInL8HD0CBAiiAQIECABAgQIAS+Risrmd0WFoPZMVk1qKxjDlvbXjiv63fAiLe3wI5tujSLbZV+W6e8Lh4N2W8jAEqgC6gRTgrBh8BD0JaOmsNHUh+uERkMPjKGYiYXLMNwpDCJJTKFiM10601NsdgnWiSFMxCoF4VAvuq1przw30zyjg2kenek52D22dTYjdWOay7oMVMdpt09PT56ShemuksbXdUHixEUVu9ouipIF62y2OyUGm+aAjzjy9NmsxLMSzHEkkkk7yc4RF/MT9O7aS9slhWvVSbRNIyrclKf5qsf8ADFHb/bvbCLsizSJQGAvl5rDnVR5RyWBBMMZ4Llb62ekfanpedWtsdAdUtVl+aivnGq9g+n7TM0k8ubaJsxZkliRMmM9WRlKntE4gXvExyKNz7FLRc0xZvrdYh5yn+YEUl6ppBwIEKAIECBDAQzLHaPrUIehmTmeMTfYcPQIECKIIECBAAgQIEAMWs9nnFVbmpLMWNrasU+lMlXaQPE0jl5b234/Ef9CMCLmo3wIz+Kv6ZpYJoCwTRuzLSH1OERlMPy4AODWEVgwYAqunNl63R1rSlf2RcDeovL5gR5jMes50sOjocmUjxBjyfPlFGZTmpKniDQxpgjM3AgQItAQIECABGj9nNp6vSdib/wCRLX77BP8AVGciZoa1CVaJMw5JMR/usG+UAe14EEM4FYAOBEG2aXkSsHnIp928C33Rj5RV2zpVJKsJZmXiCFe4KAkdlrrkVoaGkAZ7pZ7VZFknPIkyWtExMHIYJKVtaX6ElhroMDhWoIGes/tlmg9rR63TndtBr5yqRyy2dH7bZmIMuYwri8sGajfWqBVa/WFYFnE1wa3cNTXg3AKM+Yg6o7ej+hfTiz6SDiWry5qAF5UwC8ATQMCCQwrhtGsCojTkx559leg7c2kZFoWU6S5d6+7qZalCpVlUGhc1IpQUBAJj0I8KguAYEJaCgJZqIMwmUMBAm5GD8BCnNjFbajWbLBwxqeAFflE20HGkV5as8/VU+dB845MvXTj4l4e95wIboN0CK2WlGpgGGlaFkxRFI0PyzERWh5DADjGATCJhgiYAlyWjzj06mCXPnWbqVDJPdzNHeYTCXAyyow8BHoiS0cF9r9luaSmH+IqP/huf6POL40ZsTAgQI1ZhAg4NVqabYATAjQ2TopMbvOq7gC5+Q840ejOhcosAUeYx+iSa/cQVPnAGx0h7aLoupmBQlZeNQNbzDTHcsSNG6enW1C8z9IUVpSYaKd4C0VhE/QfQeYoBSzpKPvMFU+OMzxEaqx9DcazJtT9VcfvtWvhAGUkoBgo8B6rDOldKy7NLabMNAPojFmNCboGGNATjTAGOgTuilnKFRfB968Tj9k9k+EYHph0adUMubLLSz3ZqnAHUaY3DjShwNSMYAf0PbBOly5owExFela0vKGpXXStOUX0l98c40LMtNlRZdxJstRdVr3VvdGQoQVY/zCLcdL3GH6HOJ2h5NPHrIyuFazONBpnpjL0fMkB/+MWUEglQEu1qRiuLDHGmykavR3SOVOoMUY/RYjE7FOTcM90cW03o+dpC0y5s67JlyhREBvOamrHEBQcvepTXGskTgFCjBQAoAApdAoAa7uMXMetIuW7t1BrTEOZbGLAV8oxli6RPLwr1ij6JJJHBwMOBryi70ZpKXOYXcDQm42DZaqGh4isY5zOVeHzV2887ThvpEFpxL0+cImWxQTUjhrzp+URbPawXcmoCgk50oNewjA5RnbbWkiwvkmINimDrJrHVRfNtv2REPR+mZc4Ey3DgAVpmK7V1RH/WAlSJ0xyF72OeAAAN0YmhI84StJXXttECM1+uJf8AzUrxf+2BE7P5W6NCyYii0KPpD4/CKzSvSiRJwxmP7ijL7THBOGe6N52z8XgMPJXPUNeqOb2vpdan7lySNwvNwvNgeIAiptE2bOP7SZMmfaZiBwB+EXOOs7nHTrf0iskrvz0qNSm+fBK0ijtnT2SoJlyXYDNnIlrQZmvaNONIxiSRtHLH4ZQ69mBBquGRvGgp51EX/HE/dHpH2qTspZVNhSXU/em1HgsZnpBa5tvSTNId5ovo5NSboKtLJagFO2wH2Y1OhOjizmPUS5dVpeYAALWtO01cTQ92L1+h7DvMCebeZIhyQu65TI6PzG7zKvO8fLDzizkdGUGLlj9ohB+fjHR5PRQk4uQNg7PmMfOLiw9GZKY3ATtOJ8TD2NOZSujMuYABKJ+wGHizEVHOL3RHs/oQwlKp1FyznjTAAx02zaPUZKIs5Fn3QtnMWW0X0LTDrGZtwN0cKLSvPbG20RouXJFERVG4AQuzyoLRWlpM9nWUWbqzdZrjql4GhCuwAfEHu1EILVYWIQsKhkVDc1AwIIBBwIOII2Ea4XWCgEYPpF0LrV7PSufVscP5ScjuJpvEYOcGRmRkdXXAqRcI1Y6yOOcd2Iit0voSTaVAmLiO64wdfst8soeyscjsiNnQKDw+JiYqDWSTzPxp5RP050dn2Ulv3kv+KoOA+uM141pvFaQx0e0no8TOrtd4TCRdvG7KauVKUBb6rMa6hsYIExRx2eqfCDNoPDGuzEa6bttI6VK0bZHWiyJJXYEUU8qgxQaZ6FggtZjdOfVuag/ZY4qeNRwhdBnLFpZ5YpS+oFABRWWuJo9Man3tesROs9qmzVmJZ5RmdgpUsssrUGhozAkY5jDDAxn5qkEqQxYEghuyARmCIQrlSCGuEZFCQw/nz84yy45l4vHksX+ieiM+TMvhJUoUp2Zz9oVyZLrVGsUYUNIftnRF5ikTLQoB1S5VCuNVozNqGGIIOJoITo3pawotpoV1TcFI3uowI3qBTYc407ufzrHNlhcLpvjyXLti/wD0DZv40z+nI/8AHAjW14eMCIX9Vh51bkwrSvVsy7ahSVAFNtIwkmVUVAJGd6tBjjW8M9tTHQpMrKprTwOFDhrjnVvshsc/9HmGstqtZ5hqap/Drj2lyoN2oiOrirDlh9QPeH8oveJxHmIDTBsJ3sa48BX4iI5nje3rfAWYxyAHn4E/h+EbsEkTGOX+EUHjiR4w0zrmTUj+YjniacTBmyMe+fvfn8oWslBma8PxNKeBgNFl6an2WYs6SCad5Tk6nNSPXKOraB01JtskTpR3Mh7yNrVvkdfjHN2Qe6B9r1Q8hECyW6bYp3XyDXU8uhuuusHKh3j5QaOV2pJMSZUqKro7puTbJQmyjhkynvI2tW379cX0qJWXLlRKlpCJaxJliERyWsSEENIIeWGRawqEiDrDA4EQdJaXkWdb06dLlj6zAeWZjF6W9rFkSos6TLQ20dhPvGvmBAToMR7Za5cpb02YktdrsFHnHGrf0+0naaiXcs6ZdgVam9ieyeB1RSPot5rX7RNeaxzLsW8dXlD0NupaV9pthlVWWXtDZUlr2a7CxwEc80gZdrLTDZxLD4iVmi6qb654UxMCRY0TIDZU/DYIkPMCgliFH1iFHMt8aGDSdo+iNJ22wkGRMDSx/wAGZUrTYr95OGI3Rt5PtNUrjYp4mbL0vqydzlr1K/Vrujntp6S2RO9aFJ2JV+V5QfEUiumdO7Ktbsuax4KteZYnyh9CbbO2aQmWh2mzEVXY1KrW6KAAAFhUkADUK7oZpvpXZUeGusYiV05nzTSRYrx1gF5h53FBifJXpBPFZVjaUDr6oSz96cawrT0080LLBZyEAxZmN0ADWcz+MbPQMwNZZBpg0tWFQQbjCsvDV2CopHO9E+zK12h1fSdq/ZqQeoRrzHdUUSXxF455Zx1VkVVChbqqAqhRgABQCmoAADlHNzZSzUbceNl7IvLu84EFdG+BHO20yNnm7ohdI9HJbJDSWwPeR6Yo4yYbtR2jfSJtym06qQ4qnYOcXLYLJXM7AzVaVNSk+UbrrqOxxTMEEGuWI2xLE3YQPs5+K/MxfdMej7T1E+TQ2iSKhQP3ssYmWdpGJHMbKZGwzeuQOtSNYH0TrBY1pHZhlMptyZY3GpM+0BVLEEgbxiNw2843Wg+gr2iWk1Z8tUdQylQzG6dvcy14mMKbKDmR/nPjWngY3/si0opSdYJjYS6vLBJFZTntKCCBg2WulYpPaxn+ziWJMwS3d5103SVVVvA5UpXEgjPWDlHMjZScGNNVNezFRiPAx6Ba1S5KLVgqAAC8yotKYZnKm+OSdOpUkWhptndHSYatdPZWZrxGBrnnTE7ql90UsZOwWqbYJwn2ep1TJRwWYusU27DhHZujWnJNslLNkmoODKe8ja1YbfjHJHxFBUjwH5HnEbRtvnWCd18g1BwmSq9l12HY2xvOFYuV6FkmJKLGJ0d7R9GmWHafdYj90Ua+D7te7Xn4RWaS9rIxFlsxOx5tVG6qDEeYhaO11BFiv0r0islmBM6fLSmqtW+6tTHFNI9J9I2rB57IvuIAi02Gne47or5WiBWrtjtNS3njzh6Lbo+lfa3JFVs1nmTTleeiruNK9pedYyekOmelLVUCb1KH6Mlbp4FzieRiJKsqjJa7zB2m2S5Qq7qg1VIHh73Kph6LaCmhixvTWqx+k5LN4n84sZFjlrktaazlGetvTOSuEpGmHUTgvKuJ4XRD1j0Fpm30IQ2eUcmcmSOVazWB3AiC2QatXNt0pJk/vJqL9XM+AxPIGKC09NVJCyJLTGJoC2snAAKKlq6sjjGo0b7JrNLF60TnnNrVf2aeOLNxqIpOkvs7KTL8hii6gK0HPErxx4Rn/Nj4v+OjsnRrT1sxumzqRm7CSQOGM2LmxexQk3rVbbxPeWUhY1/7sw/6Y6LoibLWSgCOq0FDfabTACjFyTq27Tri1rUVqGHvA4H8DxjPLky/C5hPyxVg9lOipQF6VMnH/qzm/wAsu6I0Fi6NWCSQZdjs6kZMJCFh/MwJrziyv01QpJnoRl92/lXzIbtZogpUAMuGQzpkMNcKBNMPCG7bipxOryIOUOhsKQfhUFMFcgawjHEZcTAc7yfhCCuwDzMSZNzhAg7p2DwgQtGyRatM+OULoNYMEimuPx+UOutcoYKspxNBTCsc/wCmuizZJxtcpf2MwjrkAwRzlNGwGvjUaxToNkSl7hDVoVJilWF5WBDKRUEEUIPGLxz+UZY/TmwmVANQRSoNb2G06hyhq9OR1myTdcAirEgFWoCAVpuNRXzgW7R72GeJBJMmZVrPMOYxxlk+8CQOYP0okNJ94gcTU14DI55x1/U1tzasqM1otLElpygnO4t401duZU+UHZ7K168zvMbVfa9QkalpQNyiSJiA4C8d+A8BkecOM75EhRTEa+ajE8TBugZk+83InyIGI50gzcyAJ44fDHnWG1A1Ak7/AMBnBq+/kPy+BMGiJNkWuQXaAADzAxPGJEuQoyFfXmINJdNg145/dBw84VNdEW8xAUfScgL4ZeABhgtOPhj55Z7TWGNIaSk2cftGAOpB2nP8v0RxFIpp2nZ0+YJFiRndsAwFSRroupRmWbLHLONR0c9maIettzCa5x6oMbgOfbcYzDlgKDe0TlnMZ2rHG1l7PpS3W1urschsPpAXiudL0xqS5flxjQ6K9lDuesttpJJzSWbzc5z4Dkp4x0aTdRQiXUQCgRFCqOAGAhRbjzMc+XNb42nFJ6iaD6OWOyfuLOiN/EoXmf1GJI4CkWkwmtST8YYWbqMATMM4yt360k0eKiEKoIunl6pCRPrq4nKCLA7PXCFTFLYyThlsibKnDvSmoTmKdk7QREMgEevGEB6bt0EuvBrfq4Rw+QowzQ/EVzEDL8orZU8NStQwyOUK0npqTIlNMtMxZQWlWapDVyugYsxxwAqaHYYv/Lz1N6TrQ1VbgfhBqcuERZNqV0DqysjLeVgRcKkVqG2Uh6W3ZXEVpWmumHliPKFPKCmxy+P4QA1M4JtohQau71jE6MOt9UECC7Xq7BQDbMPl6rDdabYSzDfAoB68IDOSLdJUTKui3AC4LAXRSoNDqpB9YTqjkPTvt6VYHbJXHVWXK+ZMdgJpXnGmeOpEY3dqu0/otLXJaTMwBxVsyjjAOPEgjWCRHNpdpaRMaz2pbsxDS+T2WGQNaZEYg4A7jHVpjVp+MVvSLQsi2yws1SGA7ExRR12iv0lrmp5UOMPj5Pnq+Fnh9MeXO2m4Z04LUgcTSFBdwA3+dANfAxWWjolpKzV6gmbLzBlkE559U2IP2a68YgHSOkEwazsD9aQwPhHXM5fHP82etMF24+Q25DA8xWHkQkVGW0dlfvH4Yxllt+kj3bO9dos7Mf8AECBxiTL6LaVtX728ikYmc90bqoKsfuxNy16cxtTNIaekScA3WN7sugUfamGtOAEI0R0ZtekWE6e3UyDQqce0P+mhOOH02268o0vR7oLZ7OQ8w9fMGIvCktTuTGpyxYngI1187fIV8Yxz5v01x4/2Y0NoqRZJfV2eXdB7zYl3IyvPmeGQ1CJqzPHV+EMBqnH4wYqMvW6Oe7vdazpLD4YQReI17eOUF1g1ljAaTMasAZYQyjbvHGDDUzgB9aah6+UOg7PW6IomjbB9ZsgB84Y+uEP1ERFYw6lRwgBTyq+qRlunWiP0qz9W9aob0twa3WIoQy/SU4A6xnuOoJoYOdKrx+UVLq7K99OI9G+llo0d1llnKXkOGVpZPdvKRflnfXLI7jjGp9kOmbTabTNM+c8wS7OFUtjdrMTAbzd4mm6LrT3RWRaMXQE7sDyIxEWPRmzWOxyriCXLqasS+LsMMWJqaVy1VyFSTrlyY3G/us8ePLfTVGYN5gA+6PL5xBbSktdpwBosuY5IOINFU1rqgStJXjRUnknAfsmQE0LUBamNFMYbb/GXuk2r7BBxUfr2XsmeKf3wINl8ZK012+EIeZBNMoIizcYZOZ+0eUUtgmr9NEav1pYCU8FU846NorTC2mWs1GFGGQxKtTtKd4PrGKPpFoVbQl04EVKsBkcuY2j8It+iehZC2dRLQy5yrSabxN56YlhWjITipFCAaYYrG11ljP3Gc3Mlne4+NIWsz1jDTIVqDgdcFKmZ+vWcYaaH5U47PRiZYKmauPLgIhX9kWWgkrMrsHxP5RU9K+HNPzz1gF49lRr1kk/hFQ5148YmaWmVnPxp4CkQ5tSKQXuiHVfH16/3hVdfrGGEHoZwZcDfz1QjLDgEGsO1BH5Qws06h5Qpb2unrhADl4DVWFK5pqH55QxXVhAlNmCfWuAHOtOs4w8lDDEwYgjXzhdnRjgoLY0JAwB3tkDurrg1sbOD60OK2GGPKsSV0ZMJ+hltJPDu4DnD6aKemMxRwln4l8fKLnHkn7iIGOzzhYNMyBEn9UzAQRMRtxVkFPFq+ENTpRU3XWhpUHMGmtTrprBod1CCVcLPR9QnxO+FI7DCEStmUPq3qkSaDb7YksEsSTrVRjU5DHu13kRktD6bZprWcv1KMrtJAlyJl9sQ4YkMgYgsa1UUY3qljGm03oZbQpxuvTBtR2BhrGw5jhUHnmltHT5RopKzJfbUk0IIxFG+sAQGG/WCBrhInLOzr8N69knzQVNqny2eQZyWjsrKVq5dZKwFKqxJ7yzWZTmDRWXR4WUrWkWyWQt2es61zEZSKS2eXLlsOsS/dopKlkSiBiKnNS9IJNo02b2nwImPMagWhF4AhnNb1McKUoawEEpWYhJxmr2G6mz38DlR2BYBgNe8ZZ6z/wARlJr/ACaX9SzPcsf/AOzaf74KMtcX/k7X/wDTT+yDh/0j+26O5fOAMsvluhwVMMuuJz9ARyuk20vP1qEKkTLjVGz0D5QQlQakCEFpMlicoZR2tQ360O3d+cVaMag8sPW2JdgtADUrQNhwOowrS0og3wO9Wu5xifHBuZ2RV7m0zq6RpjRoOjKd5t4Hh/vGbmEUjR6Ie7Zmf6rHwBp5iDH0ZeKGZOLMze8S3iSYfzFYjUxqBhXXC1rw2a/MxKiro2GFcKAw2xOswaHZhv8Aj63QAtTjn5fOCbZ84QRTafXlDk4VGB5wAdwDLZ/vCWYAE3cAKnbQCp+EKQ1A5xK0ZZAzFjiFpQfWOOP2QBu7Q2RWOO6m5aiXY9G/xKMfdHcH953nDUBrNtKlgUAAoMAAKAcBCZaxJliOmSRjaNFh0CCUQsRSRgQoQBBiAIs3Rko5KEPvIAp5jJuflFU6lTRhRhUbjQkVFfomlRuIjQQifIVxddQw2H4g5g7xjEZYbXjlpnnGuI9usEu0JRxwYUvLXiKEYYg4GkS5ksoSjZqaXqUDAgMrYa6GhwzB1YwmhB3Rz+Vp1YyOhtArJmzpMxau4MyUwJo9DWYu0tgJigEOpVsfpNoNFBJDPcc3mAWrqr0AYhTQMvZvE454EYRJt9m6xRdN11IZG1q4xU7x8oQ+nFUri8tmpelpKLAPTtAsABd3lvwjWZ7RcZ+k39ZTP4sr+hO/ugojfrSd703+mn/mgRfZan/VTS/x/KG3Qk7BCy4G0wExrhT0Y5mxoptMIoKgU3Yw5NHrlDHKEZ9hhSLKzMJ0qhPay/nGKnnWn8xisfX4fjGW6Z6RtEizEyJhQFwsxl7101pRvoi9mRjiu+Kw91+05ebaVEAzzjSTRcsdNoUeJBPzjkXRLpQ36PP65i7ygZgLElmU4EEnE0YjM/SEdBn9LLHaRLk2ab1poZjUVluKooL14DElgKCL+LjtP1LopRuhXrDKE0I1DKsGprrjNZbgUhEtKw/LWtNvrzgEUOW/1ugGyBKNKeZgdUAMTDgVjw9bIT1O+DRbRZrKuXrxi90dLCl1yrR13qqhGptoQK7Ly7Yo7WgArTxMXM4hxJDYLfWrVpdLK12jZi85VMMw9DgTGnH6nPxb2c1FYkrDUtaQ4pjdkcEOAQlRC4ZBChAEHAAECBBwBU26jTHIxuJLDcS0yg8DX+YRDI1RY6TWrYZiU5J3Xpd1eBKsf5d5isRq/KMOX1rh4UopBNLB1CDrtMC9u8YzWh/qyV7ggRLv8PXKDgPdZkGuswqVgYBlDHP0IDIBj69YQgDGsIaSThgIXe2eUE0tj6/CAEuNpziq0rZEmo8s5MCDz1jyPKLbqdp5QlrMNnjDnRVwq2SXku8s4EG6aaxnzBwPhG19mFlI62dTDCWD4M/ld8Y1OlOjdntBBmICRhUEjCuRK5xZWbRyykCIoVQKAAYDXzNSY1y5dzTKYaqfLXLhCEWmEOSAab6f7wcxMQYyrWHZIhyYKYw2g/D1z+MOFtWMIE3ju+cJKMdvwz+UOI1eeeXw2Qsvqr+fr5QwgWiyVBiz0PMWYgDUOaODiMqUI3ihpviIRXA1Pr14RAlt1EzrBW6cHA2ajTWR8K7YJdUa3Grlz3TssGdNTirTFGxxnMp7wqxwqCasVrpKSGVRNQsxpcvC/wDc7wOBzGqE2KeGoQQaioIyI2jdAtS33XtEEGoIoaEAjI4HAkUOonjHR9MtLcmDBiuW1zFNGlX/AK0ogcyjkXRwZocbSkle9MCf9wGX/nAryikp8GIhLpaz/wDMSf6qfjAbSKEfs703/tio39s0TDZerugJNhm1WlZYBNSWNEVRVnalbqjXhUkmgABJIArDCWmcwF2UJddc1gSN9yWSG1YX14w5Z7KqEtUs5FC7GrUrW6Bki1FbqgDAHE4wbMw6MqzHci+4oQDUIoqEQHXSpJOtmbIUArHU6hnD2lbZVrgxu4nichy+cMqzU2Rz55S1rjNQTKYQyHVC6DaTAu04RCieXnAhVwQINhRHX61QibmPWqBAgB5tUGdXODgRUBuXr4xGtGfL5wIEIHhDrwIEIfkuR+Pzg5mrn8RAgRQKHryhxoECF+AaOQ9aod1H1tgQIQJPeiPbNUCBBTiZ0X/dL9pvjFu3fECBGuHiMkuX3hD82BAjRB1vlC2ygQICNS8oSc4ECA2cl95vtt/mMSBnAgRzNvwVCJuXL8IOBBCIgQIEMP/Z",
        desc: "I developed a GUI application using the Tkinter library in Python, integrating multiple file conversion packages. This solution offers comprehensive file conversion capabilities directly on users' devices, ensuring privacy by eliminating the need for online services. Users can convert files securely without concerns about data storage on external sites. "
    },
    {
        id: 3,
        title: "ATM System",
        // img: "https://images.pexels.com/photos/18224251/pexels-photo-18224251/free-photo-of-atm-banking-booth.jpeg?auto=compress&cs=tinysrgb&w=600",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkLgOjJz4sCm7l5Nrcnr53Sr90DwZJlMVhQ&s",
        desc: "I developed an ATM Management System in Java, utilizing Java Swing for the user interface and JDBC with MySQL for database integration. The project showcases my proficiency in OOP principles, core Java concepts, exception handling, and advanced Java techniques. It features a robust GUI implemented with Java Swing, ensuring secure and efficient operations with MySQL."
    },
]

const Single = ({item}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref, 
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return(
        <>
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    )
}

export const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, 
        damping: 30, 
    })

  return (
    <div className="portfolio" ref={ref}>

    <div className="progress">
                <h1>Featured Works</h1>    
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>  

        {item.map(item => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}



// import "./portfolio.scss"
// import { motion, useTransform } from "framer-motion"
// import { useScroll, useSpring} from "framer-motion"
// import { useRef, useState } from "react"

// const item = [
//     {
//         id: 1,
//         title: "A2Z Dog Care",
//         img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
//         desc: "I designed and implemented a dog service web platform featuring emergency assistance from hospitals and NGOs, grooming services, day-care options, and training center’s, all tailored for locality-specific needs. Utilizing Bootstrap and CSS for styling, ionicons and font-awesome for icons, and custom scripts for seamless transitions and enhanced user experience. The platform also includes location-based analysis for each service, optimizing user accessibility and efficiency. "
//     }, 
//     { 
//         id: 2,
//         title: "My Personal Study Desk",
//         // img: "https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=600",
//         img: "data:image/jpeg;base64,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",
//         desc: "I developed a GUI application using the Tkinter library in Python, integrating multiple file conversion packages. This solution offers comprehensive file conversion capabilities directly on users' devices, ensuring privacy by eliminating the need for online services. Users can convert files securely without concerns about data storage on external sites. "
//     },
//     {
//         id: 3,
//         title: "ATM System",
//         // img: "https://images.pexels.com/photos/18224251/pexels-photo-18224251/free-photo-of-atm-banking-booth.jpeg?auto=compress&cs=tinysrgb&w=600",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkLgOjJz4sCm7l5Nrcnr53Sr90DwZJlMVhQ&s",
//         desc: "I developed an ATM Management System in Java, utilizing Java Swing for the user interface and JDBC with MySQL for database integration. The project showcases my proficiency in OOP principles, core Java concepts, exception handling, and advanced Java techniques. It features a robust GUI implemented with Java Swing, ensuring secure and efficient operations with MySQL."
//     },
// ]

// const Single = ({item}) => {

//     const ref = useRef();

//     const {scrollYProgress} = useScroll({
//         target:ref, 
//         // offset: ["start start", "end start"]
//     });

//     const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

//     return(
//         <>
//         <section >
//             <div className="container">
//                 <div className="wrapper">
//                     <div className="imageContainer" ref={ref}>
//                         <img src={item.img} alt="" />
//                     </div>
//                     <motion.div className="textContainer" style={{y}}>
//                         <h2>{item.title}</h2>
//                         <p>{item.desc}</p>
//                         <button>See Demo</button>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//         </>
//     )
// }

// export const Portfolio = () => {

//     const ref = useRef()

//     const {scrollYProgress} = useScroll({
//         target:ref, 
//         offset: ["end end", "start start"]
//     });

//     const scaleX = useSpring(scrollYProgress, {
//         stiffness: 100, 
//         damping: 30, 
//     })

//     let styles_notLast = {
//         position: "sticky",
//     }

//     let styles_Last = {
//         position: "relative",
//     }

//     const[isLast, setIsLast] = useState(false);

//   return (
//     <div className="portfolio" ref={ref}>



//     <div className="progress">  
//                 {item.map(item => {
//                     if(item.id == 3){
//                         setIsLast(true)
//                     }
//                 })}
//                 <h1 style={isLast ? styles_Last : styles_notLast}>Featured Works</h1>
//                 <motion.div style={{scaleX}} className="progressBar"></motion.div>
//             </div>  

//         {item.map(item => (
//             <Single item={item} key={item.id} />
//         ))}
//     </div>
//   )
// }

