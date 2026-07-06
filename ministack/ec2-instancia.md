aws ec2 run-instances \
>     --image-id ami-12345678 \
>     --count 1 \
>     --instance-type t2.micro \
>     --key-name chave-ministack \
>     --security-groups sg-ministack
{
    "ReservationId": "r-62fed680dc3841d3b",
    "OwnerId": "000000000000",
    "Groups": [],
    "Instances": [
        {
            "Architecture": "x86_64",
            "BlockDeviceMappings": [
                {
                    "DeviceName": "/dev/xvda",
                    "Ebs": {
                        "AttachTime": "2026-07-05T13:34:03+00:00",
                        "DeleteOnTermination": true,
                        "Status": "attached",
                        "VolumeId": "vol-f9acdde416392a0f5"
                    }
                }
            ],
            "Hypervisor": "xen",
            "RootDeviceName": "/dev/xvda",
            "RootDeviceType": "ebs",
            "SecurityGroups": [
                {
                    "GroupId": "sg-00000001",
                    "GroupName": "default"
                }
            ],
            "SourceDestCheck": true,
            "Tags": [],
            "VirtualizationType": "hvm",
            "InstanceId": "i-0b99d450f79d9f5d5",
            "ImageId": "ami-12345678",
            "State": {
                "Code": 16,
                "Name": "running"
            },
            "PrivateDnsName": "ip-10-0-20-162.ec2.internal",
            "KeyName": "chave-ministack",
            "AmiLaunchIndex": 0,
            "InstanceType": "t2.micro",
            "LaunchTime": "2026-07-05T13:34:03+00:00",
            "Placement": {
                "Tenancy": "default",
                "AvailabilityZone": "us-east-1a"
            },
            "Monitoring": {
                "State": "disabled"
            },
            "SubnetId": "subnet-00000001",
            "VpcId": "vpc-00000001",
            "PrivateIpAddress": "10.0.20.162"
        }
    ]
}
