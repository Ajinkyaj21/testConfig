import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';

export default function CustomDropdown({dropdownOptions = [], value = '', direction = "horizontal", defaultValue = '-- Select --', label = 'Select:', handleSelectChange = () => {}, placeholderselect = '-- Select --', showSearch = false, style = {}, showLabel = false, name = "", width = ""}) {

    return (
        <div style={{display: 'flex', flexDirection: direction == "horizontal" ? 'row' : 'column', width: width}}>
            {
                showLabel && <p> <label >{label}</label></p>
            }
            <Select
                suffixIcon={<DownOutlined />} 
                value={value || null} onChange={val => handleSelectChange(val, name)}
                placeholder={placeholderselect} showSearch={showSearch}
                defaultValue={defaultValue}
                filterOption={showSearch ? (input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    : undefined }
            >
                {dropdownOptions?.map((option, i) => (
                    <Select.Option key={i} value={option.value}>
                        {option.display}
                    </Select.Option>
                ))}
            </Select>
        </div>
    );
}