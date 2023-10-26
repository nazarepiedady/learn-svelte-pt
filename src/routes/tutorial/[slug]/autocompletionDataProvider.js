/**
 * this file is based on [dataProvider.ts from sveltejs/language-tools](https://github.com/sveltejs/language-tools/blob/master/packages/language-server/src/plugins/html/dataProvider.ts)
 */

export const globalEvents = [
	{ name: 'on:abort' },
	{ name: 'on:animationcancel' },
	{ name: 'on:animationend' },
	{ name: 'on:animationiteration' },
	{ name: 'on:animationstart' },
	{ name: 'on:auxclick' },
	{ name: 'on:beforeinput' },
	{ name: 'on:blur' },
	{ name: 'on:cancel' },
	{ name: 'on:canplay' },
	{ name: 'on:canplaythrough' },
	{ name: 'on:change' },
	{ name: 'on:click' },
	{ name: 'on:close' },
	{ name: 'on:contextmenu' },
	{ name: 'on:copy' },
	{ name: 'on:cuechange' },
	{ name: 'on:cut' },
	{ name: 'on:dblclick' },
	{ name: 'on:drag' },
	{ name: 'on:dragend' },
	{ name: 'on:dragenter' },
	{ name: 'on:dragleave' },
	{ name: 'on:dragover' },
	{ name: 'on:dragstart' },
	{ name: 'on:drop' },
	{ name: 'on:durationchange' },
	{ name: 'on:emptied' },
	{ name: 'on:ended' },
	{ name: 'on:error' },
	{ name: 'on:focus' },
	{ name: 'on:formdata' },
	{ name: 'on:gotpointercapture' },
	{ name: 'on:input' },
	{ name: 'on:invalid' },
	{ name: 'on:keydown' },
	{ name: 'on:keypress' },
	{ name: 'on:keyup' },
	{ name: 'on:load' },
	{ name: 'on:loadeddata' },
	{ name: 'on:loadedmetadata' },
	{ name: 'on:loadstart' },
	{ name: 'on:lostpointercapture' },
	{ name: 'on:mousedown' },
	{ name: 'on:mouseenter' },
	{ name: 'on:mouseleave' },
	{ name: 'on:mousemove' },
	{ name: 'on:mouseout' },
	{ name: 'on:mouseover' },
	{ name: 'on:mouseup' },
	{ name: 'on:paste' },
	{ name: 'on:pause' },
	{ name: 'on:play' },
	{ name: 'on:playing' },
	{ name: 'on:pointercancel' },
	{ name: 'on:pointerdown' },
	{ name: 'on:pointerenter' },
	{ name: 'on:pointerleave' },
	{ name: 'on:pointermove' },
	{ name: 'on:pointerout' },
	{ name: 'on:pointerover' },
	{ name: 'on:pointerup' },
	{ name: 'on:progress' },
	{ name: 'on:ratechange' },
	{ name: 'on:reset' },
	{ name: 'on:resize' },
	{ name: 'on:scroll' },
	{ name: 'on:securitypolicyviolation' },
	{ name: 'on:seeked' },
	{ name: 'on:seeking' },
	{ name: 'on:select' },
	{ name: 'on:selectionchange' },
	{ name: 'on:selectstart' },
	{ name: 'on:slotchange' },
	{ name: 'on:stalled' },
	{ name: 'on:submit' },
	{ name: 'on:suspend' },
	{ name: 'on:timeupdate' },
	{ name: 'on:toggle' },
	{ name: 'on:touchcancel' },
	{ name: 'on:touchend' },
	{ name: 'on:touchmove' },
	{ name: 'on:touchstart' },
	{ name: 'on:transitioncancel' },
	{ name: 'on:transitionend' },
	{ name: 'on:transitionrun' },
	{ name: 'on:transitionstart' },
	{ name: 'on:volumechange' },
	{ name: 'on:waiting' },
	{ name: 'on:webkitanimationend' },
	{ name: 'on:webkitanimationiteration' },
	{ name: 'on:webkitanimationstart' },
	{ name: 'on:webkittransitionend' },
	{ name: 'on:wheel' }
];

/** @type {{ name: string, description?: string }[]} */
export const svelteEvents = [
	...globalEvents,
	{
		name: 'on:introstart',
		description: 'Disponível quando o elemento tem `transition`'
	},
	{
		name: 'on:introend',
		description: 'Disponível quando o elemento tem `transition`'
	},
	{
		name: 'on:outrostart',
		description: 'Disponível quando o elemento tem `transition`'
	},
	{
		name: 'on:outroend',
		description: 'Disponível quando o elemento tem `transition`'
	}
];

export const svelteAttributes = [
	{
		name: 'bind:innerHTML',
		description: 'Disponível quando contenteditable=true'
	},
	{
		name: 'bind:textContent',
		description: 'Disponível quando contenteditable=true'
	},
	{
		name: 'bind:innerText',
		description: 'Disponível quando contenteditable=true'
	},
	{
		name: 'bind:clientWidth',
		description: 'Disponível para os elementos de nível de bloco. (apenas-leitura)'
	},
	{
		name: 'bind:clientHeight',
		description: 'Disponível para os elementos de nível de bloco. (apenas-leitura)'
	},
	{
		name: 'bind:offsetWidth',
		description: 'Disponível para os elementos de nível de bloco. (apenas-leitura)'
	},
	{
		name: 'bind:offsetHeight',
		description: 'Disponível para os elementos de nível de bloco. (apenas-leitura)'
	},
	{
		name: 'bind:this',
		description:
			'To get a reference to a DOM node, use bind:this. If used on a component, gets a reference to that component instance.'
	}
];

export const sveltekitAttributes = [
	{
		name: 'data-sveltekit-keepfocus',
		description:
			'Atributo específico da SvelteKit. O elemento focado atualmente manterá o foco depois da navegação. De outro modo, o foco será reiniciado ao corpo.',
		valueSet: 'v',
		values: [{ name: 'off' }]
	},
	{
		name: 'data-sveltekit-noscroll',
		description: 'Atributo específico da Svelte. Impedirá o deslocamento depois da ligação ser clicada.',
		valueSet: 'v',
		values: [{ name: 'off' }]
	},
	{
		name: 'data-sveltekit-preload-code',
		description:
			"Atributo específico da SvelteKit. Fará a SvelteKit executar a função de carregamento da página logo que o utilizador pairar o ponteiro sobre a ligação (no computador) ou tocá-lo (no telemóvel), no lugar de aguardar pelo evento de clique para acionar a navegação.",
		valueSet: 'v',
		values: [
			{ name: 'eager' },
			{ name: 'viewport' },
			{ name: 'hover' },
			{ name: 'tap' },
			{ name: 'off' }
		]
	},
	{
		name: 'data-sveltekit-preload-data',
		description:
			"Atributo específico da SvelteKit. Fará a SvelteKit executar a função de carregamento da página logo que o utilizador pairar o ponteiro sobre a ligação (no computador) ou tocá-lo (no telemóvel), no lugar de aguardar pelo evento de clique para acionar a navegação.",
		valueSet: 'v',
		values: [{ name: 'hover' }, { name: 'tap' }, { name: 'off' }]
	},
	{
		name: 'data-sveltekit-reload',
		description:
			'Atributo específico da SvelteKit. Levará a SvelteKit à fazer uma navegação de navegador normal, o que resulta num carregamento de página completo.',
		valueSet: 'v',
		values: [{ name: 'off' }]
	},
	{
		name: 'data-sveltekit-replacestate',
		description:
			'Atributo específico da SvelteKit. Substituirá a entrada da `history` atual ao invés de criar uma nova com a `pushState` quando a ligação for clicada.',
		valueSet: 'v',
		values: [{ name: 'off' }]
	}
];

export const svelteTags = [
	{
		name: 'svelte:self',
		description:
			'Permite um componente incluir-se a si mesmo, recursivamente.\n\nNão pode aparecer no alto nível da nossa marcação; deve estar dentro dum bloco `if` ou `each` para evitar um laço de repetição infinito.',
		attributes: []
	},
	{
		name: 'svelte:component',
		description:
			'Interpreta um componente dinamicamente, usando o construtor de componente especificado como esta propriedade. Quando a propriedade mudar, o componente é destruído e recriado.\n\nSe esta for falsa, nenhum componente é interpretado.',
		attributes: [
			{
				name: 'this',
				description:
					'Componente à interpretar.\n\nQuando esta propriedade mudar, o componente é destruído e recriado.\nSe esta for falsa, nenhum componente é interpretado.'
			}
		]
	},
	{
		name: 'svelte:element',
		description:
			'Interpreta um elemento de DOM dinamicamente, usando a sequência de caracteres como esta propriedade. Quando a propriedade mudar, o elemento é destruído e recriado.\n\nSe esta for falsa, nenhum elemento é interpretado.',
		attributes: [
			{
				name: 'this',
				description:
					'Elemento de DOM à interpretar.\n\nQuando esta propriedade mudar, o elemento é destruído e recriado.\nSe esta for falsa, nenhum elemento é interpretado.'
			}
		]
	},
	{
		name: 'svelte:window',
		description:
			'Permite-nos adicionar ouvintes de evento ao objeto `window` sem a preocupação com a remoção dos mesmos quando o componente for destruído, ou verificação pela existência do `window` quando interpretar do lado do servidor.',
		attributes: [
			{
				name: 'bind:innerWidth',
				description: 'Vincula à largura interna da janela. (apenas-leitura)'
			},
			{
				name: 'bind:innerHeight',
				description: 'Vincula à altura interna da janela. (apenas-leitura)'
			},
			{
				name: 'bind:outerWidth',
				description: 'Vincula à largura externa da janela. (apenas-leitura)'
			},
			{
				name: 'bind:outerHeight',
				description: 'Vincula à altura externa da janela. (apenas-leitura)'
			},
			{
				name: 'bind:scrollX',
				description: 'Vincula à posição x do deslocamento da janela.'
			},
			{
				name: 'bind:scrollY',
				description: 'Vincula à posição y do deslocamento da janela.'
			},
			{
				name: 'bind:online',
				description: 'Um pseudónimo para `window.navigator.onLine`'
			},
			// window events
			{ name: 'on:afterprint' },
			{ name: 'on:beforeprint' },
			{ name: 'on:beforeunload' },
			{ name: 'on:gamepadconnected' },
			{ name: 'on:gamepaddisconnected' },
			{ name: 'on:hashchange' },
			{ name: 'on:languagechange' },
			{ name: 'on:message' },
			{ name: 'on:messageerror' },
			{ name: 'on:offline' },
			{ name: 'on:online' },
			{ name: 'on:pagehide' },
			{ name: 'on:pageshow' },
			{ name: 'on:popstate' },
			{ name: 'on:rejectionhandled' },
			{ name: 'on:storage' },
			{ name: 'on:unhandledrejection' },
			{ name: 'on:unload' }
		]
	},
	{
		name: 'svelte:document',
		description:
			"Tal como acontece com `<svelte:window>`, este elemento permite-nos adicionar ouvintes aos eventos sobre o documento, tais como `visibilitychange`, que não dispara sobre a janela.",
		attributes: [
			// document events
			{ name: 'on:fullscreenchange' },
			{ name: 'on:fullscreenerror' },
			{ name: 'on:pointerlockchange' },
			{ name: 'on:pointerlockerror' },
			{ name: 'on:readystatechange' },
			{ name: 'on:visibilitychange' }
		]
	},
	{
		name: 'svelte:body',
		description:
			"Tal como acontece com `<svelte:window>`, este elemento permite-nos adicionar ouvintes aos eventos sobre o corpo do documento, tais como `mouseenter` e `mouseleave` que não disparam sobre a janela.",
		attributes: []
	},
	{
		name: 'svelte:head',
		description:
			'Este elemento torna possível inserir elementos no cabeçalho do documento. Durante a interpretação do lado do servidor, o conteúdo do cabeçalho é exposto separadamente ao conteúdo da marcação de hipertexto principal.',
		attributes: []
	},
	{
		name: 'svelte:options',
		description: 'Fornece um lugar para especificar opções de compilador por componente.',
		attributes: [
			{
				name: 'immutable',
				description:
					'Se for verdadeiro, diz ao compilador que prometemos não modificar quaisquer objetos. Isto permite-o ser menos conservador sobre a verificação caso os valores forem mudados.',
				values: [
					{
						name: '{true}',
						description:
							'Nós nunca usamos dados mutáveis, assim o compilador pode fazer verificações de igualdade referencial simples para determinar se os valores forem mudados.'
					},
					{
						name: '{false}',
						description:
							'O padrão. A Svelte será mais conservadora sobre se os objetos mutáveis foram ou não mudados.'
					}
				]
			},
			{
				name: 'accessors',
				description:
					"Se for verdadeiro, os recuperadores e definidores serão criados para as propriedades do componente. Se for falso, apenas serão criados para os valores exportados somente para leitura (isto é, aqueles declarados com `const`, `class`, e `function`). Se compilarmos com `customElement: true` esta opção predefine para verdadeiro.",
				values: [
					{
						name: '{true}',
						description: "Adiciona recuperadores e definidores para as propriedades do componente."
					},
					{
						name: '{false}',
						description: 'O padrão.'
					}
				]
			},
			{
				name: 'namespace',
				description: 'O espaço de nome onde este componente será usado, mais comummente "svg".'
			},
			{
				name: 'tag',
				description: 'O nome à usar quando compilamos este componente como um elemento personalizado.'
			}
		]
	},
	{
		name: 'svelte:fragment',
		description:
			'Este elemento é útil caso quisermos atribuir um componente à uma ranhura nomeada sem a criação dum elemento de DOM embrulhador.',
		attributes: [
			{
				name: 'slot',
				description: 'O nome da ranhura nomeada que deve ser escolhida como alvo.'
			}
		]
	},
	{
		name: 'slot',
		description:
			'Os componentes podem ter conteúdo filho, da mesma maneira que os elementos podem.\n\nO conteúdo é exposto no componente filho usando o elemento `<slot>`, o qual pode conter conteúdo de retrocesso que é interpretado se nenhum filho for fornecido.',
		attributes: [
			{
				name: 'name',
				description:
					'As ranhuras nomeadas permitem os consumidores escolherem como alvo áreas específicas. Eles também podem ter conteúdo de retrocesso.'
			}
		]
	}
];

const mediaAttributes = [
	{
		name: 'bind:duration',
		description: 'A duração total do vídeo, em segundos. (apenas leitura)'
	},
	{
		name: 'bind:buffered',
		description: 'Um vetor de objetos `{start, end}`. (apenas leitura)'
	},
	{
		name: 'bind:seekable',
		description: 'Um vetor de objetos `{start, end}`. (apenas leitura)'
	},
	{
		name: 'bind:played',
		description: 'Um vetor de objetos `{start, end}`. (apenas leitura)'
	},
	{
		name: 'bind:seeking',
		description: 'booleano. (apenas leitura)'
	},
	{
		name: 'bind:ended',
		description: 'booleano. (apenas leitura)'
	},
	{
		name: 'bind:currentTime',
		description: 'O ponto atual no vídeo, em segundos.'
	},
	{
		name: 'bind:playbackRate',
		description: "Quão rápido ou lento reproduzir o vídeo, onde 1 é 'normal'."
	},
	{
		name: 'bind:paused'
	},
	{
		name: 'bind:volume',
		description: 'Um valor entre 0 e 1.'
	},
	{
		name: 'bind:muted'
	},
	{
		name: 'bind:readyState'
	}
];

const videoAttributes = [
	{
		name: 'bind:videoWidth',
		description: 'apenas leitura'
	},
	{
		name: 'bind:videoHeight',
		description: 'apenas leitura'
	}
];

const indeterminateAttribute = {
	name: 'indeterminate',
	description: 'Disponível para `type="checkbox"`'
};

/** @type {Record<string, { name: string, description?: string }[]>} */
export const addAttributes = {
	select: [{ name: 'bind:value' }],
	input: [
		{ name: 'bind:value' },
		{ name: 'bind:group', description: 'Disponível para `type="radio"` e `type="checkbox"`.' },
		{ name: 'bind:checked', description: 'Disponível para `type="checkbox"`.' },
		{ name: 'bind:files', description: 'Disponível para `type="file"` (apenas leitura).' },
		indeterminateAttribute,
		{ ...indeterminateAttribute, name: 'bind:indeterminate' }
	],
	img: [{ name: 'bind:naturalWidth' }, { name: 'bind:naturalHeight' }],
	textarea: [{ name: 'bind:value' }],
	video: [...mediaAttributes, ...videoAttributes],
	audio: [...mediaAttributes],
	details: [
		{
			name: 'bind:open'
		}
	]
};
