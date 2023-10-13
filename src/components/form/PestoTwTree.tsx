import { useState } from "preact/hooks";
import React, { ReactNode } from "preact/compat";
import ReactDOM from "preact/compat";// import the react-json-view component

import './PestoTwTree.module.css'

// import the react-json-view component
import ReactJson from 'react-json-view'

// import {Theme} from 'react-base16-styling'
export interface PestoTwTreeProps {
    name: string;
    jsonTree: any;
}

export default function PestoTwTree(props: PestoTwTreeProps) {
    const [jsonTreeState, setJsonTreeState] = useState<any>(props.jsonTree);
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
        console.log(` - [+] props.name = [${name}]`)
        setJsonTreeState({
            ...value
        })
        /*
        setJsonTreeState({
            jsonTree: updatedSrc,
            name: name
        })
        */

    }

    /*****************************
     * passed object will actually be :
     * ***************************
     * {
     *     updated_src: src, //new src value
     *     name: name, //new var name
     *     namespace: namespace, //list, namespace indicating var location
     *     new_value: new_value, //new variable value
     *     existing_value: existing_value, //existing variable value
     * }
    */
    const handleChanges = ({ 
        updated_src: updatedSrc, //new src value
        name: name, //new var name
        namespace: namespace, //list, namespace indicating var location
        new_value: new_value, //new variable value
        existing_value: existing_value, //existing variable value
    }: any) => {
        /**
         * 
         */
        console.log(`//------------------------------------------- `)
        console.log(`//------------------------------------------- `)
        console.log(`//---  handleChanges : `)
        console.log(`//------------------------------------------- `)
        console.log(`//------------------------------------------- `)
        console.log(`//------------------------------------------- `)
        console.log(`//---  updated_src: updatedSrc, //new src value `)
        console.log(`//---  name: name, //new var name `)
        console.log(`//---  namespace: namespace, //list, namespace indicating var location `)
        console.log(`//---  new_value: new_value, //new variable value `)
        console.log(`//---  existing_value: existing_value, //existing variable value `)
        console.log(`//------------------------------------------- `)
        console.log(`//------------------------------------------- `)
        console.log({
            updated_src: updatedSrc, //new src value
            name: name, //new var name
            namespace: namespace, //list, namespace indicating var location
            new_value: new_value, //new variable value
            existing_value: existing_value, //existing variable value
        })

        setJsonTreeState({
            ...updatedSrc
        })
        /*
        setJsonTreeState({
            jsonTree: updatedSrc,
            name: name
        })
        */
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
            <div className={`content-normal text-left`}>
                <ReactJson src={jsonTreeState}
                    theme="ocean"
                    iconStyle="triangle"
                    indentWidth="2"
                    displayObjectSize={false}
                    displayDataTypes={false}
                    onEdit={handleChanges}
                    onAdd={handleChanges}
                    onDelete={handleChanges} />
            </div>

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