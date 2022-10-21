import React from 'react';

type SvgNameType =
    | 'Search'
    | 'Repair'
    | 'Password'
    | 'User'
    | 'Captcha'
    | 'Home'
    | 'Messages'
    | 'Music'
    | 'News'
    | 'Users'
    | 'Pointer'
    | 'Menu'
    | 'Photo'
    | 'Pencil'
    | 'Setting'
    | 'Save'
    | 'Post'
    | 'Like'
    | 'Delete'

type SvgSelectorPropsType = {
    svgName: SvgNameType
}

export const SvgSelector = (props: SvgSelectorPropsType) => {
    switch (props.svgName) {
        case "Search":
            return <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.522 286.522">
                <g>
                    <path d="M257.926,166.892c38.128-38.128,38.128-100.168,0-138.296s-100.168-38.128-138.296,0
		c-31.035,31.035-36.806,77.912-17.318,114.841L2.929,242.821c-3.905,3.905-3.905,10.237,0,14.142l26.63,26.63
		c3.905,3.905,10.237,3.905,14.142,0l99.383-99.383C180.014,203.698,226.891,197.927,257.926,166.892z M36.63,262.38l-12.488-12.488
		l89.529-89.529c1.872,2.243,3.854,4.424,5.959,6.529s4.287,4.087,6.529,5.959L36.63,262.38z M133.772,152.75
		c-30.33-30.33-30.33-79.681,0-110.012s79.681-30.33,110.012,0s30.33,79.681,0,110.012S164.103,183.08,133.772,152.75z"/>
                    <path d="M235.447,51.075c-25.733-25.733-67.605-25.733-93.338,0s-25.733,67.605,0,93.338s67.605,25.733,93.338,0
		S261.181,76.809,235.447,51.075z M156.251,130.271c-17.935-17.935-17.935-47.119,0-65.054s47.119-17.935,65.054,0
		s17.935,47.119,0,65.054S174.187,148.206,156.251,130.271z"/>
                    <path d="M213.527,72.995c-13.646-13.646-35.851-13.646-49.497,0c-3.905,3.905-3.905,10.237,0,14.142
		c3.905,3.905,10.237,3.905,14.142,0c5.848-5.848,15.365-5.848,21.213,0c3.905,3.905,10.237,3.905,14.142,0
		C217.432,83.232,217.432,76.901,213.527,72.995z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Repair":
            return <svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.159 81.159">
                <g>
                    <path d="M74.175,5.262c-1.068-1.069-2.527-1.659-4.107-1.659c-1.775,0-3.563,0.748-4.934,2.058l-5.884,4.776l-0.229,0.208
		c-1.301,1.299-1.813,3.124-1.498,4.962L43.806,28.926l-2.302-1.992c1.65-6.453,1.447-15.049-4.118-20.614
		C33.311,2.245,28.097,0,22.706,0c-2.143,0-4.261,0.358-6.296,1.063c-0.932,0.323-1.646,1.083-1.909,2.034s-0.042,1.969,0.59,2.726
		l7.393,8.836l-0.364,5.683l-6.144,0.701l-8.771-7.338c-0.757-0.634-1.776-0.855-2.727-0.59c-0.951,0.264-1.711,0.978-2.034,1.91
		c-2.396,6.919-0.285,14.371,5.792,20.444c3.274,3.276,7.988,5.007,13.63,5.007c0.413,0,0.829-0.021,1.245-0.041
		c-0.209,0.182-0.419,0.362-0.617,0.56L5.641,57.847c-4.679,4.679-4.679,12.291,0,16.97l2.827,2.827
		c2.266,2.267,5.28,3.515,8.485,3.515s6.219-1.248,8.485-3.515L42.29,60.791c0.934-0.933,1.669-1.982,2.223-3.103l14.969,17.296
		c0.048,0.055,0.098,0.107,0.148,0.159c1.678,1.677,4.196,2.601,7.094,2.601c3.521,0,7.095-1.385,9.326-3.615
		c3.922-3.922,5.158-12.267,1.012-16.416c-0.053-0.051-0.104-0.101-0.159-0.146L55.108,38.709L67.682,25.76
		c0.346,0.059,0.692,0.088,1.041,0.088c1.506,0,2.896-0.563,3.916-1.582l4.984-6.113c1.141-1.192,1.855-2.695,2.021-4.251
		c0.193-1.822-0.398-3.568-1.621-4.79L74.175,5.262z M38.048,56.549L21.196,73.402c-1.133,1.133-2.64,1.757-4.243,1.757
		s-3.109-0.624-4.243-1.757l-2.827-2.827c-2.339-2.34-2.339-6.146,0-8.484l16.853-16.854c1.133-1.133,2.64-1.757,4.242-1.757
		c0.471,0,0.932,0.062,1.379,0.165l7.438,8.595C39.813,53.797,39.234,55.363,38.048,56.549z M71.806,69.887
		c-1.111,1.111-3.154,1.857-5.084,1.857c-1.211,0-2.246-0.293-2.793-0.789L32.121,34.203c-0.797-0.921-2.073-1.269-3.225-0.88
		c-2.24,0.754-4.671,1.152-7.031,1.152c-3.958,0-7.292-1.154-9.387-3.25c-1.896-1.896-4.559-5.25-4.957-9.432l5.59,4.677
		c0.63,0.528,1.447,0.773,2.266,0.68l9.915-1.132c1.443-0.165,2.561-1.339,2.653-2.789l0.601-9.384
		c0.049-0.769-0.199-1.526-0.693-2.116l-4.789-5.724c3.663,0.1,7.229,1.709,10.077,4.557c3.918,3.919,3.833,11.259,2.095,16.421
		c-0.389,1.154-0.041,2.429,0.88,3.226l36.757,31.808C74.206,63.476,73.891,67.801,71.806,69.887z M73.261,14.035l-4.707,5.772
		c-0.049-0.019-0.104-0.045-0.164-0.081l-2.037-1.21l-15.787,16.26l-2.207-1.909l16.41-15.935l-1.209-2.035
		c-0.035-0.062-0.063-0.117-0.08-0.165l5.541-4.499l0.23-0.208c0.299-0.297,0.598-0.4,0.784-0.417l3.646,3.646
		C73.669,13.404,73.572,13.723,73.261,14.035z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Password":
            return <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.096 203.096">
                <g>
                    <path d="M153.976,73.236h-3.308V49.115C150.669,22.033,128.634,0,101.549,0C74.465,0,52.43,22.033,52.43,49.115v24.121H49.12
		c-9.649,0-17.5,7.851-17.5,17.5v94.859c0,9.649,7.851,17.5,17.5,17.5h104.856c9.649,0,17.5-7.851,17.5-17.5V90.736
		C171.476,81.087,163.626,73.236,153.976,73.236z M67.43,49.115C67.43,30.304,82.736,15,101.549,15
		c18.813,0,34.119,15.304,34.119,34.115v24.121H67.43V49.115z M156.476,185.596c0,1.355-1.145,2.5-2.5,2.5H49.12
		c-1.355,0-2.5-1.145-2.5-2.5V90.736c0-1.355,1.145-2.5,2.5-2.5H59.93h83.238h10.808c1.355,0,2.5,1.145,2.5,2.5V185.596z"/>
                    <path d="M101.547,116.309c-4.142,0-7.5,3.357-7.5,7.5v28.715c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5v-28.715
		C109.047,119.666,105.689,116.309,101.547,116.309z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "User":
            return <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 489">
                <g>
                    <g>
                        <path d="M417.4,71.6C371.2,25.4,309.8,0,244.5,0S117.8,25.4,71.6,71.6S0,179.2,0,244.5s25.4,126.7,71.6,172.9S179.2,489,244.5,489
			s126.7-25.4,172.9-71.6S489,309.8,489,244.5S463.6,117.8,417.4,71.6z M244.5,462C124.6,462,27,364.4,27,244.5S124.6,27,244.5,27
			S462,124.6,462,244.5S364.4,462,244.5,462z"/>
                        <path d="M244.5,203.2c35.1,0,63.6-28.6,63.6-63.6s-28.5-63.7-63.6-63.7s-63.6,28.6-63.6,63.6S209.4,203.2,244.5,203.2z
			 M244.5,102.9c20.2,0,36.6,16.4,36.6,36.6s-16.4,36.6-36.6,36.6s-36.6-16.4-36.6-36.6S224.3,102.9,244.5,102.9z"/>
                        <path d="M340.9,280.5c-22.3-32.8-54.7-49.5-96.4-49.5s-74.1,16.6-96.4,49.5c-16.6,24.4-27.2,57.7-31.4,98.7
			c-0.8,7.4,4.6,14.1,12,14.8c7.4,0.8,14.1-4.6,14.8-12c8.5-82.3,42.5-124,101-124s92.5,41.7,101,124c0.7,6.9,6.6,12.1,13.4,12.1
			c0.5,0,0.9,0,1.4-0.1c7.4-0.8,12.8-7.4,12-14.8C368.1,338.1,357.5,304.9,340.9,280.5z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Captcha":
            return <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47">
                <g>
                    <g>
                        <path
                            d="M37.076,19.748c-0.824,0-1.494,0.672-1.494,1.499v1.46h2.991v-1.46C38.573,20.42,37.9,19.748,37.076,19.748z"/>
                        <path d="M41.227,12.635H5.773C2.6,12.635,0,15.237,0,18.41v10.18c0,3.178,2.6,5.775,5.773,5.775h35.454
			C44.4,34.365,47,31.768,47,28.59V18.41C47,15.237,44.4,12.635,41.227,12.635z M12.56,25.077l1.385,1.508l-2.399,1.8l-0.984-1.8
			c-0.145-0.257-0.372-0.761-0.691-1.508c-0.349,0.821-0.581,1.321-0.696,1.508l-0.998,1.8l-2.466-1.8l1.491-1.508
			c0.42-0.415,0.827-0.771,1.229-1.063c-0.41-0.037-0.949-0.113-1.614-0.238l-2.065-0.336l0.958-2.812l1.852,0.842
			c0.195,0.088,0.68,0.365,1.452,0.824c-0.165-0.747-0.271-1.302-0.319-1.666l-0.263-2.013h2.941l-0.238,2.013
			c-0.052,0.49-0.166,1.045-0.335,1.666c0.339-0.17,0.563-0.283,0.669-0.345c0.372-0.207,0.659-0.35,0.852-0.442l1.853-0.879
			l0.918,2.812l-2.049,0.428c-0.375,0.072-0.931,0.119-1.67,0.146C11.874,24.406,12.266,24.758,12.56,25.077z M26.137,25.077
			l1.387,1.508l-2.399,1.799l-0.983-1.799c-0.145-0.257-0.372-0.761-0.69-1.508c-0.35,0.821-0.58,1.321-0.695,1.508l-1,1.799
			l-2.465-1.799l1.491-1.508c0.42-0.415,0.826-0.771,1.229-1.063c-0.408-0.037-0.949-0.113-1.614-0.238l-2.066-0.336l0.959-2.812
			l1.853,0.842c0.193,0.088,0.68,0.365,1.451,0.824c-0.169-0.747-0.275-1.302-0.32-1.666l-0.264-2.011h2.942l-0.239,2.011
			c-0.054,0.49-0.166,1.045-0.333,1.666c0.337-0.17,0.561-0.283,0.668-0.345c0.37-0.207,0.658-0.35,0.852-0.442l1.854-0.879
			l0.919,2.812l-2.051,0.428c-0.375,0.072-0.929,0.119-1.669,0.146C25.451,24.406,25.844,24.758,26.137,25.077z M41.35,27.625
			c0,0.619-0.507,1.125-1.125,1.125H33.93c-0.619,0-1.125-0.506-1.125-1.125v-3.794c0-0.619,0.506-1.125,1.125-1.125h0.152v-1.46
			c0-1.653,1.343-2.998,2.994-2.998c1.652,0,2.996,1.344,2.996,2.998v1.46h0.152c0.617,0,1.125,0.506,1.125,1.125V27.625z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Home":
            return <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.365 59.365">
                <path d="M58.363,26.632l-9.681-8.989V6.365h-8v3.849L29.682,0L1.002,26.632c-0.404,0.376-0.428,1.009-0.052,1.414
	c0.375,0.404,1.008,0.427,1.414,0.052l4.319-4.011v3.278v32h16V35.302c0-1.07,0.867-1.937,1.937-1.937h10.126
	c1.07,0,1.937,0.867,1.937,1.937v24.063h16v-32v-3.278l4.319,4.011c0.192,0.179,0.437,0.267,0.681,0.267
	c0.269,0,0.536-0.107,0.732-0.319C58.791,27.641,58.767,27.008,58.363,26.632z"/>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Messages":
            return <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.615 472.615">
                <g>
                    <g>
                        <polygon points="0,82.451 0,391.67 167.131,257.646 		"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M13.708,68.285L214.942,279.23c11.25,11.789,31.481,11.789,42.731,0l201.44-210.945H13.708z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <polygon points="305.485,257.681 472.615,391.71 472.615,82.665 		"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M291.829,271.98l-19.907,20.846c-9.384,9.826-22.029,15.24-35.615,15.24c-13.586,0-26.23-5.413-35.614-15.24
			l-19.915-20.876L15.699,404.331h441.168L291.829,271.98z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Users":
            return <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.863 459.863">
                <g>
                    <g>
                        <g>
                            <path d="M395.988,193.977c-18.629,24.992-45.641,41.956-77.406,44.25c26.626,31.04,43.84,70.378,47.152,113.55
				c1.243,16.197,0.369,24.083-0.932,30.599c16.064-2.497,30.815-6.128,43.488-10.794c42.626-15.694,51.573-38.891,51.573-55.586
				C459.863,265.521,434.565,220.849,395.988,193.977z"/>
                            <path d="M276.72,199.407c10.642,5.952,22.36,9.093,34.525,9.093c45.83,0,81.115-44.3,81.115-96.677
				c0-52.382-35.29-96.677-81.115-96.677c-18.734,0-36.411,7.436-50.724,21.145c20.03,25.65,31.446,59.072,31.446,94.667
				C291.967,154.544,286.961,178.037,276.72,199.407z"/>
                            <path d="M259.999,226.279c-24.558,31.058-57.739,46.482-91.839,46.482c-36.232,0-68.69-17.206-91.839-46.482
				C30.403,256.333,0,308.217,0,367.076c0,18.127,9.926,43.389,57.213,60.8c29.496,10.861,68.898,16.841,110.947,16.841
				c42.049,0,81.451-5.98,110.947-16.841c47.287-17.411,57.213-42.673,57.213-60.8C336.32,308.217,305.918,256.333,259.999,226.279z
				"/>
                            <path d="M168.16,242.763c53.003,0,93.806-51.234,93.806-111.804c0-60.571-40.808-111.804-93.806-111.804
				c-52.995,0-93.806,51.223-93.806,111.804C74.354,191.541,115.169,242.763,168.16,242.763z"/>
                        </g>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Music":
            return <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.255 513.255">
                <g>
                    <path d="M331.895,421.526V237.344l108.475-17.588c-17.277-91.572-97.64-160.85-194.234-160.85
		c-109.201,0-197.721,88.52-197.721,197.721c0,109.202,88.52,197.722,197.721,197.722c10.592,0,20.978-0.857,31.115-2.459
		c7.938-13.176,22.177-23.75,40.258-28.271C322.285,422.437,327.108,421.727,331.895,421.526z M282.463,75.043l-21.184,92.811
		h-21.185l-15.132-92.811C247.159,63.942,282.463,75.043,282.463,75.043z M246.136,330.033c-40.542,0-73.406-32.864-73.406-73.406
		c0-40.542,32.864-73.405,73.406-73.405c40.542,0,73.406,32.864,73.406,73.405C319.542,297.169,286.678,330.033,246.136,330.033z
		 M246.136,200.658c-30.869,0-55.969,25.1-55.969,55.969c0,30.866,25.1,55.97,55.969,55.97c30.867,0,55.969-25.104,55.969-55.97
		C302.105,225.758,277.002,200.658,246.136,200.658z M246.136,296.607c-22.044,0-39.977-17.933-39.977-39.98
		c0-22.044,17.939-39.977,39.977-39.977c22.047,0,39.968,17.933,39.968,39.977C286.104,278.675,268.183,296.607,246.136,296.607z
		 M271.458,486.001c0.958,5.308,3.062,10.249,6.1,14.688c-10.296,1.318-20.77,2.075-31.415,2.075
		C110.419,502.764,0,392.345,0,256.627C0,120.91,110.419,10.491,246.136,10.491c120.473,0,220.945,87.036,242.01,201.516
		l-23.896,3.88C445.057,112.913,354.586,34.702,246.136,34.702c-122.371,0-221.925,99.555-221.925,221.925
		c0,122.371,99.555,221.926,221.925,221.926c8.195,0,16.279-0.479,24.246-1.348C270.453,480.125,270.772,483.062,271.458,486.001z
		 M513.255,225.279v213.405c0,17.674-13.175,31.771-33.727,36.96c-22.562,5.592-44.343-3.854-48.67-21.148
		c-4.326-17.324,10.45-35.902,33.006-41.547c10.196-2.518,20.227-2.004,28.626,0.952V285.336L377.119,306.42l-0.532,159.944h-0.023
		c-0.101,15.15-13.761,30.016-33.408,34.88c-22.283,5.609-45.643-5.001-48.148-20.877c-4.285-17.129,10.32-35.518,32.663-41.115
		c10.054-2.5,19.878-1.997,28.135,0.893V250.817L513.255,225.279z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "News":
            return <svg width="16px" height="16px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g>
                        <path
                            d="M22,5.75 L22,20.5 C22,20.7761424 22.2238576,21 22.5,21 C22.7454599,21 22.9496084,20.8231248 22.9919443,20.5898756 L23,20.5 L23,7 L24.25,7 C25.1681734,7 25.9211923,7.70711027 25.9941988,8.60647279 L26,8.75 L26,20.75 C26,22.4830315 24.6435452,23.8992459 22.9344239,23.9948552 L22.75,24 L5.25,24 C3.51696854,24 2.10075407,22.6435452 2.00514479,20.9344239 L2,20.75 L2,5.75 C2,4.8318266 2.70711027,4.07880766 3.60647279,4.0058012 L3.75,4 L20.25,4 C21.1681734,4 21.9211923,4.70711027 21.9941988,5.60647279 L22,5.75 L22,20.5 L22,5.75 Z M9.74652744,13.0034726 L7.25,13.0034726 C6.3318266,13.0034726 5.57880766,13.7105828 5.5058012,14.6099454 L5.5,14.7534726 L5.5,17.25 C5.5,18.1681734 6.20711027,18.9211923 7.10647279,18.9941988 L7.25,19 L9.74652744,19 C10.6647008,19 11.4177198,18.2928897 11.4907262,17.3935272 L11.4965274,17.25 L11.4965274,14.7534726 C11.4965274,13.8352992 10.7894172,13.0822802 9.89005465,13.0092738 L9.74652744,13.0034726 Z M17.75,17.5 L14.25,17.5 L14.1482294,17.5068466 C13.7821539,17.556509 13.5,17.8703042 13.5,18.25 C13.5,18.6296958 13.7821539,18.943491 14.1482294,18.9931534 L14.25,19 L17.75,19 L17.8517706,18.9931534 C18.2178461,18.943491 18.5,18.6296958 18.5,18.25 C18.5,17.8703042 18.2178461,17.556509 17.8517706,17.5068466 L17.75,17.5 Z M7.25,14.5034726 L9.74652744,14.5034726 C9.86487417,14.5034726 9.96401426,14.585706 9.98992476,14.6961499 L9.99652744,14.7534726 L9.99652744,17.25 C9.99652744,17.3683467 9.91429402,17.4674868 9.80385014,17.4933973 L9.74652744,17.5 L7.25,17.5 C7.13165327,17.5 7.03251318,17.4177666 7.00660268,17.3073227 L7,17.25 L7,14.7534726 C7,14.6351258 7.08223341,14.5359857 7.19267729,14.5100752 L7.25,14.5034726 L9.74652744,14.5034726 L7.25,14.5034726 Z M17.75,13.0034726 L14.25,13.0034726 L14.1482294,13.0103192 C13.7821539,13.0599816 13.5,13.3737768 13.5,13.7534726 C13.5,14.1331683 13.7821539,14.4469635 14.1482294,14.4966259 L14.25,14.5034726 L17.75,14.5034726 L17.8517706,14.4966259 C18.2178461,14.4469635 18.5,14.1331683 18.5,13.7534726 C18.5,13.3737768 18.2178461,13.0599816 17.8517706,13.0103192 L17.75,13.0034726 Z M17.75,8.49665793 L6.25,8.49665793 L6.14822944,8.50350455 C5.78215388,8.55316697 5.5,8.86696217 5.5,9.24665793 C5.5,9.6263537 5.78215388,9.94014889 6.14822944,9.98981132 L6.25,9.99665793 L17.75,9.99665793 L17.8517706,9.98981132 C18.2178461,9.94014889 18.5,9.6263537 18.5,9.24665793 C18.5,8.86696217 18.2178461,8.55316697 17.8517706,8.50350455 L17.75,8.49665793 Z"></path>
                    </g>
                </g>
            </svg>
        case "Pointer":
            return <svg width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                    <g>
                        <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M255.989,356.571
			L122.714,223.329h266.582L255.989,356.571z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Menu":
            return <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.833 92.833">
                <g>
                    <g>
                        <path d="M89.834,1.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V4.75
			C92.834,3.096,91.488,1.75,89.834,1.75z"/>
                        <path d="M89.834,36.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V39.75
			C92.834,38.096,91.488,36.75,89.834,36.75z"/>
                        <path d="M89.834,71.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V74.75
			C92.834,73.095,91.488,71.75,89.834,71.75z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Photo":
            return <svg width="45" height="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15.5" fill="#808080" stroke="white"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M16 18.8444C17.3746 18.8444 18.4889 17.7301 18.4889 16.3555C18.4889 14.9809 17.3746 13.8666 16 13.8666C14.6254 13.8666 13.5111 14.9809 13.5111 16.3555C13.5111 17.7301 14.6254 18.8444 16 18.8444ZM16 18.2222C17.031 18.2222 17.8667 17.3865 17.8667 16.3555C17.8667 15.3246 17.031 14.4889 16 14.4889C14.9691 14.4889 14.1334 15.3246 14.1334 16.3555C14.1334 17.3865 14.9691 18.2222 16 18.2222Z"
                      fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18.9969 11.3777C18.2512 10.6923 17.5642 10.1333 15.978 10.1333C14.3917 10.1333 13.7047 10.6923 12.959 11.3777H10.4C9.36909 11.3777 8.53336 12.2135 8.53336 13.2444V19.4666C8.53336 20.4976 9.36909 21.3333 10.4 21.3333H21.6C22.631 21.3333 23.4667 20.4976 23.4667 19.4666V13.2444C23.4667 12.2135 22.631 11.3777 21.6 11.3777H18.9969ZM18.7535 12L18.6882 11.9396C18.6261 11.8822 18.566 11.8266 18.5087 11.7744C18.2747 11.5611 18.0669 11.3838 17.8429 11.2366C17.4207 10.959 16.8922 10.7555 15.978 10.7555C15.0637 10.7555 14.5352 10.959 14.113 11.2366C13.889 11.3838 13.6812 11.5611 13.4472 11.7744C13.3898 11.8267 13.3299 11.8821 13.2677 11.9396L13.2024 12H10.4C9.71273 12 9.15558 12.5571 9.15558 13.2444V19.4666C9.15558 20.1539 9.71273 20.7111 10.4 20.7111H21.6C22.2873 20.7111 22.8445 20.1539 22.8445 19.4666V13.2444C22.8445 12.5571 22.2873 12 21.6 12H18.7535Z"
                      fill="white"/>
            </svg>
        case "Pencil":
            return <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.345 0.958172C11.1228 0.858708 11.9098 1.17678 12.7094 1.92915L12.7103 1.93002C13.5126 2.68875 13.8778 3.45841 13.823 4.24233C13.7701 4.99983 13.3309 5.64097 12.8302 6.17001M12.8302 6.17001L7.35959 11.9605C7.20536 12.1284 6.9977 12.2706 6.80084 12.3759C6.60144 12.4825 6.3708 12.5738 6.15427 12.6122L6.15094 12.6128L4.00504 12.9794C3.48467 13.0691 2.98567 12.939 2.6302 12.6019C2.27523 12.2653 2.11837 11.7744 2.17648 11.2514L2.17665 11.2499L2.42439 9.08054C2.45316 8.86474 2.5333 8.63122 2.62778 8.42864C2.72191 8.22679 2.85034 8.01276 3.00233 7.85096L3.00331 7.84993L8.47664 2.05659C8.97766 1.52734 9.59336 1.05429 10.345 0.958172M9.20319 2.7437C9.20311 2.74379 9.20328 2.74362 9.20319 2.7437L3.73118 8.53564C3.73107 8.53576 3.73129 8.53552 3.73118 8.53564C3.67653 8.59395 3.60146 8.70678 3.53407 8.85129C3.4679 8.99319 3.42815 9.12446 3.41623 9.20884L3.17036 11.3618C3.17034 11.3621 3.17031 11.3623 3.17029 11.3625C3.14195 11.6192 3.2217 11.7847 3.31831 11.8763C3.41451 11.9676 3.58218 12.0375 3.83514 11.9939L3.8359 11.9938L5.98064 11.6274C6.06416 11.6123 6.19284 11.567 6.32934 11.494C6.46773 11.42 6.57183 11.3402 6.62394 11.2831L6.62992 11.2765L12.1033 5.48326C12.5491 5.01236 12.7968 4.58326 12.8255 4.1726C12.8523 3.78829 12.6943 3.29146 12.0237 2.6571C11.3569 2.02977 10.8539 1.90123 10.4718 1.95009C10.0636 2.0023 9.64874 2.27312 9.20319 2.7437Z"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M7.84978 2.87261C8.12263 2.8301 8.37828 3.01683 8.42079 3.28968C8.67221 4.90342 9.98189 6.1385 11.6102 6.3025C11.8849 6.33017 12.0852 6.57534 12.0576 6.85009C12.0299 7.12484 11.7847 7.32514 11.51 7.29746C9.43161 7.08813 7.75463 5.50987 7.43271 3.44362C7.3902 3.17077 7.57693 2.91512 7.84978 2.87261Z"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M1.50009 14.6666C1.50009 14.3905 1.72395 14.1666 2.00009 14.1666H14.0001C14.2762 14.1666 14.5001 14.3905 14.5001 14.6666C14.5001 14.9428 14.2762 15.1666 14.0001 15.1666H2.00009C1.72395 15.1666 1.50009 14.9428 1.50009 14.6666Z"/>
            </svg>
        case "Setting":
            return <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.317 458.317">
                <g>
                    <g>
                        <path d="M446.185,179.159h-64.768c-2.536-7.702-5.636-15.15-9.26-22.29l45.818-45.818c4.737-4.737,4.737-12.416,0-17.152
			L364.416,40.34c-4.737-4.737-12.416-4.737-17.152,0l-45.818,45.818c-7.14-3.624-14.587-6.724-22.289-9.26V12.131
			c0.001-6.699-5.429-12.129-12.128-12.129h-75.743c-6.698,0-12.129,5.43-12.129,12.128v64.768
			c-7.702,2.535-15.149,5.636-22.29,9.26L111.05,40.341c-4.737-4.737-12.416-4.737-17.152,0L40.339,93.9
			c-4.737,4.736-4.737,12.416,0,17.152l45.817,45.817c-3.624,7.14-6.725,14.588-9.26,22.29H12.129C5.43,179.159,0,184.59,0,191.288
			v75.743c0,6.698,5.43,12.128,12.129,12.128h64.768c2.536,7.702,5.636,15.149,9.26,22.29L40.34,347.266
			c-4.737,4.736-4.737,12.416,0,17.152l53.559,53.559c4.737,4.736,12.416,4.736,17.152,0l45.817-45.817
			c7.14,3.624,14.587,6.725,22.29,9.26v64.768c0,6.698,5.43,12.128,12.129,12.128h75.743c6.698,0,12.129-5.43,12.129-12.128v-64.768
			c7.702-2.535,15.149-5.636,22.289-9.26l45.818,45.817c4.737,4.736,12.416,4.736,17.152,0l53.559-53.559
			c4.737-4.737,4.737-12.416,0-17.152l-45.817-45.817c3.624-7.14,6.724-14.587,9.26-22.289h64.768
			c6.698,0,12.129-5.43,12.129-12.128v-75.743C458.314,184.59,452.884,179.159,446.185,179.159z M229.157,289.542
			c-33.349,0-60.384-27.035-60.384-60.384s27.035-60.384,60.384-60.384s60.384,27.035,60.384,60.384
			S262.506,289.542,229.157,289.542z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Save":
            return <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.485 295.485">
                <g>
                    <path d="M288.865,65.628L232.917,9.681c-4.239-4.239-9.988-6.62-15.983-6.62h-9.329v83.63c0,5.599-4.539,10.138-10.138,10.138
		H62.548c-5.599,0-10.138-4.539-10.138-10.138V3.06H22.603C10.12,3.06,0,13.18,0,25.664v244.158
		c0,12.483,10.12,22.603,22.603,22.603h250.279c12.483,0,22.603-10.12,22.603-22.603V81.611
		C295.485,75.617,293.104,69.867,288.865,65.628z"/>
                    <path d="M164.076,76.829h17.333c3.498,0,6.333-2.836,6.333-6.333V23.829c0-3.498-2.835-6.333-6.333-6.333h-17.333
		c-3.498,0-6.333,2.835-6.333,6.333v46.667C157.743,73.993,160.579,76.829,164.076,76.829z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Post":
            return <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <g>
                    <g id="document_x5F_alt_x5F_fill">
                        <g>
                            <path d="M18,0H4v32h24V9.998L18,0z M15.918,12V4l8,8H15.918z"/>
                        </g>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Like":
            return <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.997 51.997">
                <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
	c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
	c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
	C52.216,18.553,51.97,16.611,51.911,16.242z"/>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        case "Delete":
            return <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M3.31058 3.35578C4.64695 3.22082 5.98348 3.15332 7.3201 3.15332C9.56368 3.15332 11.8135 3.26751 14.0494 3.48909C14.3242 3.51632 14.5249 3.76117 14.4977 4.03596C14.4704 4.31076 14.2256 4.51145 13.9508 4.48422C11.7467 4.26579 9.52985 4.15332 7.3201 4.15332C6.01696 4.15332 4.71374 4.21913 3.41035 4.35079L3.40888 4.35093L2.04888 4.48427C1.77406 4.51121 1.52943 4.31026 1.50248 4.03544C1.47554 3.76061 1.67649 3.51598 1.95131 3.48904L3.31058 3.35578Z"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.30649 2.52308L6.15986 3.39618C6.11413 3.66851 5.85628 3.8522 5.58396 3.80647C5.31163 3.76073 5.12794 3.50289 5.17367 3.23056L5.32034 2.35723C5.3229 2.34202 5.32554 2.32609 5.32821 2.30996C5.37411 2.0327 5.44146 1.62596 5.71259 1.3185C6.02863 0.960119 6.51083 0.833374 7.12677 0.833374H8.87343C9.49686 0.833374 9.97858 0.970307 10.2927 1.33234C10.5642 1.64521 10.6299 2.05341 10.6737 2.32598C10.6759 2.33924 10.678 2.35218 10.68 2.36478L10.8264 3.22994C10.8725 3.50222 10.6891 3.76029 10.4169 3.80636C10.1446 3.85244 9.88652 3.66907 9.84044 3.3968L9.69327 2.52717C9.63751 2.18515 9.60223 2.06239 9.53746 1.98774C9.50162 1.94644 9.37667 1.83337 8.87343 1.83337H7.12677C6.61603 1.83337 6.4949 1.9433 6.46261 1.97991C6.4012 2.04955 6.36654 2.16655 6.30649 2.52308Z"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M12.599 5.59444C12.8745 5.61223 13.0835 5.85004 13.0657 6.12561L12.6322 12.8417L12.6313 12.8543C12.6138 13.1052 12.5944 13.381 12.5428 13.6376C12.4892 13.9038 12.3947 14.1846 12.2033 14.4338C11.8025 14.9556 11.1205 15.1667 10.1401 15.1667H5.8601C4.87972 15.1667 4.19768 14.9556 3.7969 14.4338C3.60549 14.1846 3.51103 13.9038 3.45744 13.6376C3.40575 13.381 3.38644 13.1052 3.36887 12.8543L3.36779 12.8389L2.93447 6.12561C2.91668 5.85004 3.12565 5.61223 3.40122 5.59444C3.67679 5.57665 3.9146 5.78563 3.93239 6.06119L4.36554 12.7718C4.36557 12.7722 4.3656 12.7727 4.36563 12.7732C4.38445 13.0417 4.40037 13.2546 4.43775 13.4402C4.47416 13.621 4.5247 13.7397 4.58996 13.8247C4.70251 13.9712 4.98047 14.1667 5.8601 14.1667H10.1401C11.0197 14.1667 11.2977 13.9712 11.4102 13.8247C11.4755 13.7397 11.526 13.621 11.5624 13.4402C11.5998 13.2546 11.6157 13.0417 11.6346 12.7732C11.6346 12.7727 11.6346 12.7722 11.6347 12.7718L12.0678 6.06119C12.0856 5.78563 12.3234 5.57665 12.599 5.59444Z"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.38676 11C6.38676 10.7239 6.61062 10.5 6.88676 10.5H9.10676C9.38291 10.5 9.60676 10.7239 9.60676 11C9.60676 11.2761 9.38291 11.5 9.10676 11.5H6.88676C6.61062 11.5 6.38676 11.2761 6.38676 11Z"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M5.83344 8.33337C5.83344 8.05723 6.05729 7.83337 6.33344 7.83337H9.66677C9.94291 7.83337 10.1668 8.05723 10.1668 8.33337C10.1668 8.60952 9.94291 8.83337 9.66677 8.83337H6.33344C6.05729 8.83337 5.83344 8.60952 5.83344 8.33337Z"/>
            </svg>
        default:
            return <svg></svg>
    }
}