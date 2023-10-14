import { useState } from "preact/hooks";
import { JsonViewer } from '@textea/json-viewer'

// import the react-json-view component
import ReactJson from 'react-json-view'

// import {Theme} from 'react-base16-styling'
export interface PestoOmyTreeProps {
    name: string;
    jsonTree: any;
}

export default function PestoOmyTree(props: PestoOmyTreeProps) {
    const [jsonTreeState, setJsonTreeState] = useState<PestoOmyTreeProps>(props.jsonTree);
    const theme = {
        base00: '#272822',
        base01: '#383830',
        base02: '#49483e',
        base03: '#75715e',
        base04: '#a59f85',
        alignItems: 'Right',
        nestedNodeLabel: ({ style }: any, keyPath: any, nodeType: any, expanded: any) => ({
            style: {
                textTransform: expanded ? 'uppercase' : style.textTransform,
                fontSize: '12px'
            },
        }),
        nestedKeyLabel: {
            fontSize: '12px',
        },
        value: {
            fontSize: '12px'
        }
    };

    /**
     * 
     */
    /*
    const handleToggle = () => {
        setJsonTreeState({ isEditing : !jsonTreeState.isEditing })
    }
    */

    /*
    const handleTexareaChange = ({ target : { value } }: any) => {
        const { name, jsonTree } = props
        console.log(`name = [${name}]`)
        setJsonTreeState({
            changeValue : value
        })
        if (JsonArea.isValid(value))
            input.onChange(JSON.parse(value))
    }
    */

    const handleTexareaBlur = ({ target: { value } }: any) => {
        const { name } = props
        console.log(`name = [${name}]`)
        setJsonTreeState({
            jsonTree: value,
            name: name
        })

    }

    const handleChanges = ({ updated_src: updatedSrc }: any) => {
        const { name } = props
        setJsonTreeState({
            jsonTree: updatedSrc,
            name: name
        })
    }

    return (
        <>
            <h3>{`PestoContentType: ${props.name}`}</h3>


            {// use the component in your app!
                /**
                 * awesome: https://github.com/mac-s-g/react-json-view#onedit-onadd-and-ondelete-interaction
                 */
            }
            {//<ReactJson src={jsonTreeState} />
            }
            <JsonViewer enableClipboard={true} displayDataTypes={true} editable={true} value={jsonTreeState} />

            <ul class="divide-y divide-gray-300 max-w-sm mt-16 mx-auto px-4 border">

                <li class="py-4">

                    <div class="flex items-center space-x-4">
                        <span class="text-lg font-bold">Item 1</span>
                    </div>

                    <ul class="divide-y divide-gray-300 bg-gray-50 rounded-md px-4 py-2 mt-4">
                        <li class="py-2">
                            <div class="flex items-center space-x-4">
                                <span class="text-md font-medium">Subitem 1</span>
                            </div>
                        </li>

                        <li class="py-2">
                            <div class="flex items-center space-x-4">
                                <span class="text-md font-medium">Subitem 2</span>
                            </div>

                            <ul class="divide-y divide-gray-300 bg-gray-100 rounded-md px-4 py-2 mt-2">
                                <li class="py-2">
                                    <div class="flex items-center space-x-4">
                                        <span class="text-sm font-medium">Sub-subitem 1</span>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center space-x-4">
                                        <span class="text-sm font-medium">Sub-subitem 2</span>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li class="py-2">
                            <div class="flex items-center space-x-4">
                                <span class="text-md font-medium">Subitem 3</span>
                            </div>
                        </li>
                    </ul>

                </li>

            </ul>


        </>
    )
}